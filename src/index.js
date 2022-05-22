import './styles/style.scss';
import { weatherInformation } from './js/model.js';
import { View } from './js/view.js';

const searchInput = document.querySelector('#location-search');
const searchForm = document.querySelector('.search-container');
const searchIcon = document.querySelector('#search-icon');
const sectionContainer = document.querySelector('.sections');
const todaySection = document.querySelector('#today-section');
let locationInfo;
let weatherInfo;

(async function displayOnLoad() {
  locationInfo = await weatherInformation.getLocation('Roma');
  weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
  View.todaySection(weatherInfo, locationInfo.cityName, locationInfo.country);
})();

async function searchLocation(e) {
  e.preventDefault();
  View.toggleActiveSection(todaySection);
  locationInfo = await weatherInformation.getLocation(searchInput.value);
  weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
  console.log(weatherInfo);
  searchInput.value = '';
  View.todaySection(weatherInfo, locationInfo.cityName, locationInfo.country);
}

sectionContainer.addEventListener('click', async function (e) {
  View.toggleActiveSection(e.target);
  switch (e.target.id) {
    case 'today-section':
      View.todaySection(
        weatherInfo,
        locationInfo.cityName,
        locationInfo.country
      );
      break;
    case 'tomorrow-section':
      View.tomorrowSection(
        weatherInfo,
        locationInfo.cityName,
        locationInfo.country
      );
      break;
    case 'six-days-section':
      View.sixDaysSection(weatherInfo);
      break;
  }
});

searchForm.addEventListener('submit', (e) => {
  searchLocation(e);
});

searchIcon.addEventListener('click', (e) => {
  if (searchForm.value) searchLocation(e);
});
