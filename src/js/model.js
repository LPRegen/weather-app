'use strict';

const weatherInformation = (function () {
  const _apiKey = '7f1fbcd5b4f7fd4e0d1795060fcd8a3c';

  /**
   * Fetch lat and lon based on cityName
   * @param  {string} cityName Name of the city
   * @return  {array} Array with coordinates.
   */
  async function getLocation(cityName) {
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
      return {
        country: dataResponse[0].country,
        cityName: dataResponse[0].name,
        state: dataResponse[0].state,
        latLon: coord,
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * Fetch data from requested city
   * @param  {array} coord[0] latitude
   * @param  {array} coord[1] longitud
   */
  async function fetchData(coord) {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coord[0]}&lon=${coord[1]}&exclude=minutely&units=metric&appid=${_apiKey}`,
        { mode: 'cors' }
      );
      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error.message);
    }
  }

  async function requestData(cityName) {
    try {
      let locationInfo = await getLocation(cityName);
      return fetchData(locationInfo.latLon);
    } catch (error) {
      console.log(error);
    }
  }

  const destructureObject = function (object, properties) {
    let information = Object.fromEntries(
      [...properties].map((key) => [key, Math.round(object[key])])
    );
    return information;
  };

  return {
    fetchData,
    requestData,
    getLocation,
    destructureObject,
  };
})();

export { weatherInformation };
