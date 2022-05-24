'use strict';
import { View } from './view.js';

const weatherInformation = (function () {
  const _apiKey = '7f1fbcd5b4f7fd4e0d1795060fcd8a3c';

  /**
   * Fetch lat and lon based on cityName
   * @param  {string} regionName Name of the region
   * @return  {string} Country name translated to locale language.
   */
  const regionNames = function (regionName) {
    const translated = new Intl.DisplayNames([navigator.language], {
      type: 'region',
    });
    return translated.of(regionName);
  };

  /**
   * Converts time stamp to locale's format date.
   * @param {number} timestamp Time stamp.
   * @param {boolean} gethour If true, returns the hour.
   * @returns {string} Formated date.
   */
  const convertDateToLocale = function (timestamp, getHour) {
    const convertDate = new Date(timestamp * 1000);
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    if (getHour) {
      let hours = `${convertDate.getHours()}`;
      let minutes = `0${convertDate.getMinutes()}`;
      let amPm = hours >= 12 ? 'pm' : 'am';
      return `${
        hours < 10
          ? `0${hours}:${minutes} ${amPm}`
          : `${hours}:${minutes} ${amPm}`
      }`;
    }
    return convertDate.toLocaleDateString(navigator.language, options);
  };

  /**
   * Fetch lat and lon based on cityName
   * @param  {string} cityName Name of the city
   * @return {object} Object with information about location.
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
      View.displayLoader('Searching location, please wait.');

      return {
        country: dataResponse[0].country,
        cityName: dataResponse[0].name,
        state: dataResponse[0].state,
        latLon: coord,
      };
    } catch (error) {
      View.displayLoader(error.message, error);
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
      View.displayLoader(error.message);
    }
  }

  const destructureObject = function (object, properties) {
    let information = Object.fromEntries(
      [...properties].map((key) => [key, Math.round(object[key])])
    );
    return information;
  };

  return {
    regionNames,
    convertDateToLocale,
    fetchData,
    getLocation,
    destructureObject,
  };
})();

export { weatherInformation };
