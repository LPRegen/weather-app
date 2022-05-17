import { weatherInformation } from './model';

const View = (function () {
  const _icon = document.querySelector('#weather-icon');
  const _cityCountryLocation = document.querySelector('#city-country-location');
  const _displayedDate = document.querySelector('#date');
  const _weatherDescription = document.querySelector('#weather-description');

  /**
   * Updates weather icon.
   * @param  {object} weatherObj fetched weather object.
   * @param {number} iconSize Specify icon size, options are 2 or 4, default is 4.
   */
  function getIconIdCurrent(currentInformation, iconSize = 4) {
    let iconId = currentInformation.weather[0].icon;
    _icon.src = `http://openweathermap.org/img/wn/${iconId}@${iconSize}x.png`;
  }

  /**
   * Updates displayed location and date.
   * @param {string} cityName City's name.
   * @param {string} countryName Country's name.
   * @param {string} date Date.
   */
  const _updateDisplayedLocation = function (cityName, countryName) {
    let date = new Date();
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };

    _cityCountryLocation.textContent = `${cityName}, ${countryName}`;
    _displayedDate.textContent = `${date.toLocaleDateString(
      navigator.language,
      options
    )}`;
  };

  /**
   * Updates displayed weather description.
   * @param {string} weatherObject Weather's object.
   */
  const _updateWeatherDescription = function (weatherObject) {
    _weatherDescription.textContent = weatherObject.weather[0].description;
  };

  async function updateWeatherDetails(locationInfo, weatherObject) {
    _updateDisplayedLocation(locationInfo.cityName, locationInfo.country);
    _updateWeatherDescription(weatherObject);
  }

  /**
   * Creates card with information by hours.
   * @param {Number} hour Hour.
   * @param {number} maxTemp Max temperature.
   * @param {number} minTemp Min temperature.
   * @return HTML element.
   */
  const createHourCard = function (hour, maxTemp, minTemp) {
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

  return {
    getIconIdCurrent,
    updateWeatherDetails,
  };
})();

export { View };
