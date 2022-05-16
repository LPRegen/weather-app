import { weatherInformation } from './model';

const icon = document.querySelector('#weather-icon');

const View = (function () {
  /**
   * Updates weather icon.
   * @param  {object} weatherObj fetched weather object.
   * @param {number} iconSize Specify icon size, options are 2 or 4, default is 4.
   */
  function getIconIdCurrent(weatherObj, iconSize = 4) {
    let iconId = weatherObj.current.weather[0].icon;
    console.log(iconId);
    icon.src = `http://openweathermap.org/img/wn/${iconId}@${iconSize}x.png`;
  }

  return {
    getIconIdCurrent,
  };
})();

export { View };
