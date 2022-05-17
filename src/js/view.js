import { weatherInformation } from './model';

const View = (function () {
  const _topContainer = document.querySelector('.top-container');

  const clearContent = function () {
    _topContainer.textContent = '';
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

  /**
   * Creates card with information by hours.
   * @param {Number} hour Hour.
   * @param {number} maxTemp Max temperature.
   * @param {number} minTemp Min temperature.
   * @return HTML element.
   */
  const _createHourCard = function (hour, maxTemp, minTemp) {
    const card = document.createElement('div');
    const tempContainer = document.createElement('div');
    const hourEl = document.createElement('p');
    const maxTempEl = document.createElement('p');
    const minTempEl = document.createElement('p');

    tempContainer.append(maxTempEl, minTempEl);
    card.append(hourEl, tempContainer);

    hourEl.textContent = `${hour > 11 ? `${hour} pm` : `${hour} am`}`;
    maxTempEl.textContent = `${maxTemp}`;
    minTempEl.textContent = `${minTemp}`;

    card.classList.add('hourly-details');
    hourEl.classList.add('hour');
    tempContainer.classList.add('hourly-min-max');
    maxTempEl.classList.add('max-temp-hour');
    minTempEl.classList.add('min-temp-hour');

    return card;
  };

  function todaySection(weatherObj, cityName, countryName) {
    clearContent();
    let location = _createLocationContainer(cityName, countryName);
    let weatherDescription = _createWeatherDescription(weatherObj);
    _topContainer.append(location, weatherDescription);
  }

  function tomorrowSection() {}

  function sixDaysSection() {}

  return {
    clearContent,
    todaySection,
    tomorrowSection,
    sixDaysSection,
  };
})();

export { View };
