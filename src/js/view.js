import { weatherInformation } from './model';

const View = (function () {
  const _topContainer = document.querySelector('.top-container');
  const _currentTemp = document.querySelector('.current-feels-temp');
  const _dailyDetailsContainer = document.querySelector('.daily-details');

  const clearContent = function () {
    _topContainer.textContent = '';
    _currentTemp.textContent = '';
    // _dailyDetailsContainer.textContent = '';
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
    currentTemp.textContent = `${roundedTemp[0]}°C`;
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
    let currentTemperature = _createCurrentTemp(
      weatherObj.current.temp,
      weatherObj.current.feels_like
    );
    _topContainer.append(location, weatherDescription);
    currentTemperature.forEach((html) => _currentTemp.append(html));
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
