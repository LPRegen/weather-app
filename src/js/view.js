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
   * Updates displayed location and date.
   * @param {string} cityName City's name.
   * @param {string} countryName Country's name.
   * @returns {htmlElement} HTML element.
   */
  const _createLocationContainer = function (cityName, countryName) {
    let date = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    const locationInfo = document.createElement('div');
    const cityCountryLocation = document.createElement('p');
    const dateElement = document.createElement('p');
    locationInfo.append(cityCountryLocation, dateElement);
    locationInfo.classList.add('location-info');
    cityCountryLocation.id = 'city-country-location';
    dateElement.id = 'date';
    cityCountryLocation.textContent = `${cityName}, ${countryName}`;
    dateElement.textContent = `${date.toLocaleDateString(
      navigator.language,
      options
    )}`;
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
    smallCurrent.textContent = 'Current temperature';
    smallFeels.textContent = 'Feels like';
    return [currentTemp, feelsLikeTemp, smallCurrent, smallFeels];
  };

  /**
   * Creates card with information by hours.
   * @param {Number} hour Hour.
   * @param {number} maxTemp Max temperature.
   * @param {number} minTemp Min temperature.
   * @return HTML element.
   */
  const _createHourCard = function (hourlyObject) {
    const title = document.createElement('h3');
    title.classList.add('title-details');
    title.textContent = 'Hourly details';
    let cardElements = [];

    const convertDT = function (dt) {
      let fullDate = new Date(1000 * dt);
      let hours = `${fullDate.getHours()}`;
      let minutes = `0${fullDate.getMinutes()}`;
      let amPm = hours >= 12 ? 'pm' : 'am';
      return `${
        hours < 10
          ? `0${hours}:${minutes} ${amPm}`
          : `${hours}:${minutes} ${amPm}`
      }`;
    };

    for (let i = 1; i < 8; i++) {
      const card = document.createElement('div');
      const tempContainer = document.createElement('div');
      const hourEl = document.createElement('p');
      const tempEl = document.createElement('p');
      const feelsLikeEl = document.createElement('p');
      tempContainer.append(tempEl, feelsLikeEl);
      card.append(hourEl, tempContainer);
      hourEl.textContent = `${convertDT(hourlyObject[i].dt)}`;
      tempEl.textContent = `${Math.round(hourlyObject[i].temp)} °C`;
      feelsLikeEl.textContent = `${Math.round(hourlyObject[i].feels_like)} °C`;
      card.classList.add('hourly-details');
      hourEl.classList.add('hour');
      tempContainer.classList.add('hourly-min-max');
      tempEl.classList.add('max-temp-hour');
      feelsLikeEl.classList.add('min-temp-hour');
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
    let location = _createLocationContainer(cityName, countryName);
    let weatherDescription = _createWeatherDescription(weatherObj);
    let currentTemperature = _createCurrentTemp(
      weatherObj.current.temp,
      weatherObj.current.feels_like
    );
    let hourlyCards = _createHourCard(weatherObj.hourly);
    let moreInformation = _updateMoreInformation(weatherObj.current);
    _topContainer.append(location, weatherDescription);
    currentTemperature.forEach((html) => _currentTemp.append(html));
    hourlyCards.forEach((html) => _hourlyCards.append(html));
    moreInformation.forEach((html) => _todayDetails.append(html));
  }

  function tomorrowSection() {
    // clearContent();
  }

  function sixDaysSection() {
    // clearContent();
  }

  return {
    clearContent,
    todaySection,
    tomorrowSection,
    sixDaysSection,
  };
})();

export { View };
