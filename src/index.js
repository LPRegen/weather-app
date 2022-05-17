import './styles/style.scss';
import { weatherInformation } from './js/model.js';
import { View } from './js/view.js';

const searchInput = document.querySelector('#location-search');
const searchForm = document.querySelector('.search-container');
const searchIcon = document.querySelector('#search-icon');

async function searchLocation(e) {
  e.preventDefault();
  let locationInfo = await weatherInformation.getLocation(searchInput.value);
  console.log(locationInfo);
  let weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
  await View.getIconIdCurrent(weatherInfo.current);
  console.log(weatherInfo);
  await View.updateWeatherDetails(locationInfo, weatherInfo.current);
  searchInput.value = '';
}

searchForm.addEventListener('submit', (e) => {
  searchLocation(e);
});

searchIcon.addEventListener('click', (e) => {
  searchLocation(e);
});
