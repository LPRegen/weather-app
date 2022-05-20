import { weatherInformation } from './model';

const View = (function () {
  const _topContainer = document.querySelector('.top-container');
  const _currentTemp = document.querySelector('.current-feels-temp');
  const _hourlyCards = document.querySelector('.cards');
  const _currentFeelsTemp = document.querySelector('.current-feels-temp');
  const _todayDetails = document.querySelector('.today-details');

  const clearContent = function () {
    _topContainer.textContent = '';
    _currentTemp.textContent = '';
    _hourlyCards.textContent = '';
    _currentFeelsTemp.textContent = '';
    _todayDetails.textContent = '';
  };

  /**
   * Updates displayed location and date.
   * @param {string} string String to modify
   * @returns {string} String without space and underscore.
   */
  const _modifyString = function (string) {
    let modified = string.replace('_', ' ');
    return modified.charAt(0).toUpperCase() + modified.slice(1);
  };

  const _createElement = function (element, className, id, textContent) {
    const newElement = document.createElement(element);
    if (className) newElement.classList.add(className);
    if (id) newElement.id = id;
    if (textContent) newElement.textContent = textContent;
    return newElement;
  };

  const _createDetailContainer = function (property, value) {
    const detailContainer = _createElement('div', 'detail-container');
    const propertyEl = _createElement('p', '', '', property);
    const valueEl = _createElement('p', '', '', value + ' °C');
    detailContainer.append(propertyEl, valueEl);

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
    const locationInfo = _createElement('div', 'location-info');
    const cityLocation = _createElement(
      'p',
      '',
      'city-location',
      `${cityName},`
    );
    const countryLocation = _createElement(
      'p',
      '',
      'country-location',
      ` ${weatherInformation.regionNames(countryName)}`
    );
    const dateElement = _createElement(
      'p',
      '',
      'date',
      `${weatherInformation.convertDateToLocale(timestamp)}`
    );
    locationInfo.append(dateElement, cityLocation, countryLocation);

    return locationInfo;
  };

  /**
   * Updates displayed weather description.
   * @param {string} weatherObject Weather's object.
   * @returns {htmlElement} HTML Element.
   */
  const _createWeatherDescription = function (weatherObject) {
    const container = _createElement('div', 'weather-details');
    const description = _createElement(
      'p',
      'icon-description',
      'weather-description',
      weatherObject.weather[0].description
    );
    const weatherIcon = _createElement('img', 'weather-icon', 'weather-icon');
    container.append(weatherIcon, description);
    weatherIcon.alt = 'Weather icon.';
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`;
    return container;
  };

  const _createCurrentTemp = function (currTemp, feelsTemp, todayTemp) {
    const roundedTemp = [Math.round(currTemp), Math.round(feelsTemp)];
    const currentTemp = _createElement(
      'h1',
      'current-temp',
      '',
      `${roundedTemp[0]} °C`
    );
    const feelsLikeTemp = _createElement(
      'h2',
      'feels-temp',
      '',
      `${roundedTemp[1]} °C`
    );
    const smallCurrent = _createElement(
      'small',
      'small',
      '',
      `${todayTemp ? 'Current temperature' : 'Max temperature'}`
    );
    const smallFeels = _createElement(
      'small',
      'small',
      '',
      `${todayTemp ? 'Feels like' : 'Min temperature'}`
    );
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
    let cardElements = [];

    const title = _createElement('h3', 'title-details', '', 'Hourly details');

    for (let i = fromHour; i < toHour; i++) {
      const card = _createElement('div', 'card-hourly');
      const detailHours = _createElement('div', 'detail-hours');
      const hourEl = _createElement(
        'h4',
        'hour',
        '',
        `${weatherInformation.convertDateToLocale(hourlyObject[i].dt, true)}`
      );
      const iconContainer = _createElement('div', 'weather-icon');
      const smallIcon = _createElement('img', 'hourly-icon');
      const iconDescription = _createElement(
        'p',
        'icon-description',
        '',
        hourlyObject[i].weather[0].description
      );

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
      smallIcon.src = `http://openweathermap.org/img/wn/${hourlyObject[i].weather[0].icon}@2x.png`;
      smallIcon.alt = 'Weather icon.';
      cardElements.push(card);
    }
    _hourlyCards.insertAdjacentElement('afterbegin', title);

    return cardElements;
  };

  const _updateMoreInformation = function (weatherObj, options) {
    let elements = [];
    const information = weatherInformation.destructureObject(weatherObj, [
      ...options,
    ]);

    for (const property in information) {
      const container = _createElement('div', 'more-information');
      const description = _createElement('p');
      const value = _createElement('p');
      container.append(description, value);
      description.textContent = _modifyString(property);
      switch (property) {
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
    let weatherDescription = _createWeatherDescription(weatherObj.current);
    let currentTemperature = _createCurrentTemp(
      weatherObj.current.temp,
      weatherObj.current.feels_like,
      true
    );
    let moreInformation = _updateMoreInformation(weatherObj.current, [
      'humidity',
      'uvi',
      'wind_speed',
    ]);
    let hourlyCards = _createHourCard(weatherObj.hourly);

    _topContainer.append(location, weatherDescription);
    currentTemperature.forEach((html) => _currentTemp.append(html));
    moreInformation.forEach((html) => _todayDetails.append(html));
    hourlyCards.forEach((html) => _hourlyCards.append(html));
  }

  function tomorrowSection(weatherObj, cityName, countryName) {
    clearContent();
    let location = _createLocationContainer(
      weatherObj.daily[1].dt,
      cityName,
      countryName
    );
    let weatherDescription = _createWeatherDescription(weatherObj.daily[1]);
    let moreInformation = _updateMoreInformation(weatherObj.daily[1], [
      'humidity',
      'uvi',
      'wind_speed',
    ]);
    let currentTemperature = _createCurrentTemp(
      weatherObj.current.temp,
      weatherObj.current.feels_like
    );
    let hourlyCards = _createHourCard(weatherObj.hourly, 25, 47);

    _topContainer.append(location, weatherDescription);
    moreInformation.forEach((html) => _todayDetails.append(html));
    currentTemperature.forEach((html) => _currentTemp.append(html));
    hourlyCards.forEach((html) => _hourlyCards.append(html));
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
