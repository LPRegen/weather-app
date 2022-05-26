import { weatherInformation } from './model';

const View = (function () {
  const _generalContainer = document.querySelector('.general-container');

  /**
   * Delete content of .general-container
   */
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

  /**
   * Updates displayed location and date.
   * @param {string} element Element name to create.
   * @param {string} className Class name to add.
   * @param {string} id Id name to add.
   * @param {string} textContent Text content for the new element.
   * @returns {html} New html element.
   */
  const createElement = function (element, className, id, textContent) {
    const newElement = document.createElement(element);
    if (className) newElement.classList.add(className);
    if (id) newElement.id = id;
    if (textContent) newElement.textContent = textContent;
    return newElement;
  };

  /**
   * Create container elements and append them into .general-container.
   * @param {boolean} sixDays If true, just create _cards container.
   */
  const createContainers = function (sixDays) {
    const _topContainer = createElement('div', 'top-container');
    const _currentFeelsTemp = createElement('div', 'current-feels-temp');
    const _todayDetails = createElement('div', 'today-details');
    const _dailyDetails = createElement('div', 'daily-details');
    const _cards = createElement('div', 'cards');
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

  /**
   * Display loader and/or error message until API call has a response.
   * @param {string} message Message to display while data is being fetched.
   * @param {object} error Error message.
   */
  const displayLoader = function (message, error) {
    clearContent();
    let loader;
    if (!error) {
      loader = createElement('div', 'loader');
    } else {
      loader = createElement('div', 'error');
      loader.classList.add('small-x');
    }
    const loadContainer = createElement('div', 'load-container');
    const legend = createElement(
      'h2',
      'loading-info',
      '',
      `${error ? `${message} Please enter a valid city name` : `${message}`}`
    );
    loadContainer.append(loader, legend);
    _generalContainer.append(loadContainer);
  };

  /**
   * Toggle active section of section elements.
   * @param {object} element HTML element to apply '.active-section'.
   */
  const toggleActiveSection = function (element) {
    console.log(typeof element);
    let activeSection = document.querySelector('.active-section');
    if (element.classList.contains('section-name')) {
      activeSection.classList.remove('active-section');
      element.classList.add('active-section');
    }
  };

  /**
   * Creates details section.
   * @param {string} property Property name.
   * @param {string} value Value asociated to property.
   * @returns {object} Returns HTML element.
   */
  const _createDetailContainer = function (property, value) {
    const detailContainer = createElement('div', 'detail-container');
    const propertyEl = createElement('p', '', '', property);
    const valueEl = createElement('p', '', '', value + ' °C');
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
    const locationInfo = createElement('div', 'location-info');
    const cityLocation = createElement(
      'p',
      '',
      'city-location',
      `${cityName},`
    );
    const countryLocation = createElement(
      'p',
      '',
      'country-location',
      ` ${weatherInformation.regionNames(countryName)}`
    );
    const dateElement = createElement(
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
    const container = createElement('div', 'weather-details');
    const description = createElement(
      'p',
      'icon-description',
      'weather-description',
      weatherObject.weather[0].description
    );
    const weatherIcon = createElement('img', 'weather-icon', 'weather-icon');
    container.append(weatherIcon, description);
    weatherIcon.alt = 'Weather icon.';
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObject.weather[0].icon}@2x.png`;
    return container;
  };

  /**
   * Toggle active section of section elements.
   * @param {number} currTemp Current temperature.
   * @param {number} feelsTemp Current feels temperature.
   * @param {number} todayTemp Temperature for today.
   * @returns {array} Array that contains HTML elements.
   */
  const _createCurrentTemp = function (currTemp, feelsTemp, todayTemp) {
    const roundedTemp = [Math.round(currTemp), Math.round(feelsTemp)];
    const currentTemp = createElement(
      'h1',
      'current-temp',
      '',
      `${roundedTemp[0]} °C`
    );
    const feelsLikeTemp = createElement(
      'h2',
      'feels-temp',
      '',
      `${roundedTemp[1]} °C`
    );
    const smallCurrent = createElement(
      'small',
      'small',
      '',
      `${todayTemp ? 'Current temperature' : 'Max temperature'}`
    );
    const smallFeels = createElement(
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
   * @return HTML element with information about weather in the next 8 hours (default).
   */
  const _createHourCard = function (hourlyObject, fromHour = 1, toHour = 9) {
    let cardElements = [];

    const title = createElement('h3', 'title-details', '', 'Hourly details');

    for (let i = fromHour; i < toHour; i++) {
      const card = createElement('div', 'card-hourly');
      const detailHours = createElement('div', 'detail-hours');
      const hourEl = createElement(
        'h4',
        'hour',
        '',
        `${weatherInformation.convertDateToLocale(hourlyObject[i].dt, true)}`
      );
      const iconContainer = createElement('div', 'weather-icon');
      const smallIcon = createElement('img', 'hourly-icon');
      const iconDescription = createElement(
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
    document
      .querySelector('.cards')
      .insertAdjacentElement('beforebegin', title);

    return cardElements;
  };

  /**
   * Creates card with information by hours.
   * @param {Object} weatherObj Weather object.
   * @param {array} options Options to retrieve more details.
   * @return HTML elements.
   */
  const updateMoreInformation = function (weatherObj, options) {
    let elements = [];
    const information = weatherInformation.destructureObject(weatherObj, [
      ...options,
    ]);

    for (const property in information) {
      const container = createElement('div', 'more-information');
      const description = createElement('p');
      const value = createElement('p');
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

  /**
   * Toggle class list over HTML element to display more information about days.
   * @param {object} e Event object.
   */
  const displayCardInfo = function (e) {
    const dayCard = e.target.parentElement;
    const moreInfoContainer = e.target.parentElement.nextElementSibling;
    moreInfoContainer.classList.toggle('displayed-card');
    dayCard.classList.toggle('displayed-card');
  };

  function todaySection(weatherObj, cityName, countryName) {
    delete _generalContainer.dataset.searching;
    clearContent();
    createContainers();
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
    let moreInformation = updateMoreInformation(weatherObj.current, [
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
    createContainers();
    let location = _createLocationContainer(
      weatherObj.daily[1].dt,
      cityName,
      countryName
    );
    let weatherDescription = _createWeatherDescription(weatherObj.daily[1]);
    let moreInformation = updateMoreInformation(weatherObj.daily[1], [
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

  return {
    createElement,
    clearContent,
    createContainers,
    updateMoreInformation,
    displayLoader,
    toggleActiveSection,
    todaySection,
    tomorrowSection,
    displayCardInfo,
  };
})();

export { View };
