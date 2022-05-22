import { weatherInformation } from './model';

const View = (function () {
  const _generalContainer = document.querySelector('.general-container');

  const clearContent = function () {
    _generalContainer.textContent = '';
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

  const _createContainers = function (sixDays) {
    const _topContainer = _createElement('div', 'top-container');
    const _currentFeelsTemp = _createElement('div', 'current-feels-temp');
    const _todayDetails = _createElement('div', 'today-details');
    const _dailyDetails = _createElement('div', 'daily-details');
    const _cards = _createElement('div', 'cards');
    if (sixDays) {
      _generalContainer.append(_cards);
    } else {
      _dailyDetails.append(_cards);
      _generalContainer.append(
        _topContainer,
        _currentFeelsTemp,
        _todayDetails,
        _dailyDetails
      );
    }
  };

  const toggleActiveSection = function (element) {
    let activeSection = document.querySelector('.active-section');
    if (element.classList.contains('section-name')) {
      activeSection.classList.remove('active-section');
      element.classList.add('active-section');
    }
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
    document.querySelector('.cards').insertAdjacentElement('afterbegin', title);

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

  const _createSixDaysCard = function (weatherObj) {
    let containerElements = [];

    for (let i = 1; i < weatherObj.length; i++) {
      const container = _createElement('div', 'six-days-card');
      const upperContainer = _createElement('div', 'upper-container');
      const tempContainer = _createElement('div', 'temperature');
      const maxTemp = _createElement(
        'p',
        'max-temp',
        '',
        `${Math.round(weatherObj[i].temp.max)} °C`
      );
      const minTemp = _createElement(
        'p',
        'min-temp',
        '',
        `${Math.round(weatherObj[i].temp.min)} °C`
      );
      const cardDate = _createElement(
        'p',
        'card-date',
        '',
        `${weatherInformation.convertDateToLocale(weatherObj[i].dt)}`
      );
      const weatherIcon = _createElement('img', 'six-days-icon');
      weatherIcon.alt = `${weatherObj[i].weather[0].description}`;
      weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj[i].weather[0].icon}@2x.png`;
      const spanMoreInfo = _createElement(
        'span',
        'material-symbols-outlined',
        '',
        'expand_circle_down'
      );
      spanMoreInfo.title = 'Click for more information';

      const infoContainer = _createElement('div', 'six-days-info');
      let moreInformation = _updateMoreInformation(weatherObj[i], [
        'humidity',
        'uvi',
        'wind_speed',
      ]);
      container.append(upperContainer, infoContainer);
      upperContainer.append(tempContainer, cardDate, weatherIcon, spanMoreInfo);
      tempContainer.append(maxTemp, minTemp);
      moreInformation.forEach((html) => infoContainer.append(html));
      containerElements.push(container);
    }
    return containerElements;
  };

  function todaySection(weatherObj, cityName, countryName) {
    clearContent();
    _createContainers();
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

    document
      .querySelector('.top-container')
      .append(location, weatherDescription);
    currentTemperature.forEach((html) =>
      document.querySelector('.current-feels-temp').append(html)
    );
    moreInformation.forEach((html) =>
      document.querySelector('.today-details').append(html)
    );
    hourlyCards.forEach((html) =>
      document.querySelector('.cards').append(html)
    );
  }

  function tomorrowSection(weatherObj, cityName, countryName) {
    clearContent();
    _createContainers();
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

    document
      .querySelector('.top-container')
      .append(location, weatherDescription);
    moreInformation.forEach((html) =>
      document.querySelector('.today-details').append(html)
    );
    currentTemperature.forEach((html) =>
      document.querySelector('.current-feels-temp').append(html)
    );
    hourlyCards.forEach((html) =>
      document.querySelector('.cards').append(html)
    );
  }

  function sixDaysSection(weatherObj) {
    clearContent();
    _createContainers(true);
    _createSixDaysCard(weatherObj.daily).forEach((html) =>
      document.querySelector('.cards').append(html)
    );
  }

  return {
    toggleActiveSection,
    todaySection,
    tomorrowSection,
    sixDaysSection,
  };
})();

export { View };
