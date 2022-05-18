import { weatherInformation } from './model';

const View = (function () {
  const _topContainer = document.querySelector('.top-container');
  const _currentTemp = document.querySelector('.current-feels-temp');
  const _hourlyCards = document.querySelector('.cards');
  const _todayDetails = document.querySelector('.today-details');

  const clearContent = function () {
    _topContainer.textContent = '';
    _currentTemp.textContent = '';
    _hourlyCards.textContent = '';
    _todayDetails.textContent = '';
  };

  /**
   * Converts time stamp to locale's format date.
   * @param {number} timestamp Time stamp.
   * @param {boolean} gethour If true function returns the hour.
   * @returns {string} Formated date.
   */
  const _convertDateToLocale = function (timestamp, getHour) {
    const convertDate = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    if (getHour) {
      // let fullDate = new Date(1000 * dt);
      let hours = `${convertDate.getHours()}`;
      let minutes = `0${convertDate.getMinutes()}`;
      let amPm = hours >= 12 ? 'pm' : 'am';
      return `${
        hours < 10
          ? `0${hours}:${minutes} ${amPm}`
          : `${hours}:${minutes} ${amPm}`
      }`;
    }
    return convertDate.toLocaleDateString(navigator.language, options);
  };

  const _createDetailContainer = function (property, value) {
    const detailContainer = document.createElement('div');
    const propertyEl = document.createElement('p');
    const valueEl = document.createElement('p');
    detailContainer.append(propertyEl, valueEl);

    detailContainer.classList.add('detail-container');
    propertyEl.textContent = property;
    valueEl.textContent = value + ' °C';

    return detailContainer;
  };

  /**
   * Updates displayed location and date.
   * @param {Object} weatherObj Object with retrieved information from API call.
   * @param {string} cityName City's name.
   * @param {string} countryName Country's name.
   * @returns {htmlElement} HTML element.
   */
  const _createLocationContainer = function (timestamp, cityName, countryName) {
    const locationInfo = document.createElement('div');
    const cityCountryLocation = document.createElement('p');
    const dateElement = document.createElement('p');
    locationInfo.append(cityCountryLocation, dateElement);
    locationInfo.classList.add('location-info');
    cityCountryLocation.id = 'city-country-location';
    dateElement.id = 'date';
    cityCountryLocation.textContent = `${cityName}, ${countryName}`;
    dateElement.textContent = `${_convertDateToLocale(timestamp)}`;
    return locationInfo;
  };

  /**
   * Updates displayed weather description.
   * @param {string} weatherObject Weather's object.
   * @returns {htmlElement} HTML Element.
   */
  const _createWeatherDescription = function (weatherObject) {
    const container = document.createElement('div');
    const description = document.createElement('p');
    const weatherIcon = document.createElement('img');
    container.append(description, weatherIcon);
    container.classList.add('weather-details');
    description.classList.add('weather-description');
    description.id = 'weather-description';
    weatherIcon.classList.add('weather-icon');
    weatherIcon.alt = 'Weather icon.';
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObject.current.weather[0].icon}@4x.png`;
    description.textContent = weatherObject.current.weather[0].description;
    return container;
  };

  const _createCurrentTemp = function (currTemp, feelsTemp) {
    const roundedTemp = [Math.round(currTemp), Math.round(feelsTemp)];
    const currentTemp = document.createElement('h1');
    const feelsLikeTemp = document.createElement('h2');
    const smallCurrent = document.createElement('small');
    const smallFeels = document.createElement('small');
    currentTemp.classList.add('current-temp');
    feelsLikeTemp.classList.add('feels-temp');
    smallCurrent.classList.add('small');
    smallFeels.classList.add('small');
    currentTemp.textContent = `${roundedTemp[0]} °C`;
    feelsLikeTemp.textContent = `${roundedTemp[1]} °C`;
    smallCurrent.textContent = 'Max temperature';
    smallFeels.textContent = 'Min temperature';
    return [currentTemp, feelsLikeTemp, smallCurrent, smallFeels];
  };

  /**
   * Creates card with information by hours.
   * @param {Object} hourlyObject Hourly object retrieved from API call.
   * @param {number} fromHour Starting hour, default 1.
   * @param {number} toHour Ending hour, default 9.
   * @return HTML element with information about weather in the next 8 hours(default).
   */
  const _createHourCard = function (hourlyObject, fromHour = 1, toHour = 9) {
    const title = document.createElement('h3');
    title.classList.add('title-details');
    title.textContent = 'Hourly details';
    let cardElements = [];

    for (let i = fromHour; i < toHour; i++) {
      const card = document.createElement('div');
      const detailHours = document.createElement('div');
      const hourEl = document.createElement('h4');
      const iconContainer = document.createElement('div');
      const smallIcon = document.createElement('img');
      const iconDescription = document.createElement('p');

      card.classList.add('card-hourly');
      detailHours.classList.add('detail-hours');
      hourEl.classList.add('hour');
      iconContainer.classList.add('weather-icon');
      smallIcon.classList.add('hourly-icon');
      iconDescription.classList.add('icon-description');

      iconContainer.append(smallIcon, iconDescription);
      detailHours.append(
        hourEl,
        _createDetailContainer('Temperature', Math.round(hourlyObject[i].temp)),
        _createDetailContainer(
          'Feels like',
          Math.round(hourlyObject[i].feels_like),
          iconContainer
        )
      );
      card.append(detailHours, iconContainer);

      hourEl.textContent = `${_convertDateToLocale(hourlyObject[i].dt, true)}`;
      iconDescription.textContent = hourlyObject[i].weather[0].description;
      smallIcon.src = `http://openweathermap.org/img/wn/${hourlyObject[i].weather[0].icon}@2x.png`;
      smallIcon.alt = 'Weather icon.';

      cardElements.push(card);
    }

    _hourlyCards.insertAdjacentElement('afterbegin', title);
    return cardElements;
  };

  const _updateMoreInformation = function (weatherObj) {
    let elements = [];
    const information = weatherInformation.destructureObject(weatherObj, [
      'feels_like',
      'humidity',
      'uvi',
      'wind_speed',
    ]);

    const title = document.createElement('h3');
    title.classList.add('title-details');
    title.textContent = 'More information';
    elements.push(title);

    for (const property in information) {
      const container = document.createElement('div');
      const description = document.createElement('p');
      const value = document.createElement('p');
      container.append(description, value);
      container.classList.add('more-information');

      switch (property) {
        case 'feels_like':
          description.textContent = 'Feels like';
          value.textContent = `${information[property]} °C`;
          break;
        case 'humidity':
          description.textContent = 'Humidity';
          value.textContent = `${information[property]} %`;
          break;
        case 'uvi':
          description.textContent = 'UV index';
          value.textContent = `${information[property]}`;
          break;
        case 'wind_speed':
          description.textContent = 'Wind speed';
          value.textContent = `${information[property]} km/h`;
        default:
          break;
      }

      elements.push(container);
    }
    return elements;
  };

  function todaySection(weatherObj, cityName, countryName) {
    clearContent();
    let location = _createLocationContainer(
      weatherObj.current.dt,
      cityName,
      countryName
    );
    let weatherDescription = _createWeatherDescription(weatherObj);
    let currentTemperature = _createCurrentTemp(
      weatherObj.daily[0].temp.max,
      weatherObj.daily[0].temp.min
    );
    let hourlyCards = _createHourCard(weatherObj.hourly);
    let moreInformation = _updateMoreInformation(weatherObj.current);

    _topContainer.append(location, weatherDescription);
    currentTemperature.forEach((html) => _currentTemp.append(html));
    hourlyCards.forEach((html) => _hourlyCards.append(html));
    moreInformation.forEach((html) => _todayDetails.append(html));
  }

  function tomorrowSection(weatherObj, cityName, countryName) {
    clearContent();
    let location = _createLocationContainer(
      weatherObj.daily[0].dt,
      cityName,
      countryName
    );
    let weatherDescription = _createWeatherDescription(weatherObj);

    _topContainer.append(location, weatherDescription);
  }

  function sixDaysSection() {
    // clearContent();
  }

  return {
    todaySection,
    tomorrowSection,
    sixDaysSection,
  };
})();

export { View };
