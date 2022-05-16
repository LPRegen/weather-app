'use strict';

const weatherInformation = (function () {
  const _apiKey = '7f1fbcd5b4f7fd4e0d1795060fcd8a3c';
  let weatherInfo;

  /**
   * Fetch lat and lon based on cityName
   * @param  {string} cityName Name of the city
   * @return  {array} Array with coordinates.
   */
  async function _getLocation(cityName) {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},&limit=1&appid=${_apiKey}`,
        { mode: 'cors' }
      );
      const dataResponse = await response.json();
      let coord = [
        dataResponse[0].lat.toFixed(2),
        dataResponse[0].lon.toFixed(2),
      ];
      return coord;
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Fetch data from requested city
   * @param  {array} coord[0] latitude
   * @param  {array} coord[1] longitud
   */
  async function _fetchData(coord) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=minutely&units=metric&appid=${_apiKey}`,
        { mode: 'cors' }
      );
      const dataResponse = await response.json();
      return (weatherInfo = dataResponse);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function requestData(cityName) {
    try {
      let coord = await _getLocation(cityName);
      return _fetchData(coord);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    requestData,
    weatherInfo,
  };
})();

export { weatherInformation };
