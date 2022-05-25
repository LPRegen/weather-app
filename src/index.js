// import './styles/style.scss';
import { weatherInformation } from './js/model.js';
import { View } from './js/view.js';
import { SixDaysModule } from './js/six-days.js';

const searchInput = document.querySelector('#location-search');
const searchForm = document.querySelector('.search-container');
const searchIcon = document.querySelector('#search-icon');
const sectionContainer = document.querySelector('.sections');
const todaySection = document.querySelector('#today-section');
const generalContainer = document.querySelector('.general-container');
let locationInfo;
let weatherInfo;

// (async function displayOnLoad() {
//   locationInfo = await weatherInformation.getLocation('Roma');
//   weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
//   View.todaySection(weatherInfo, locationInfo.cityName, locationInfo.country);
// })();

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
      SixDaysModule.sixDaysSection(weatherInfo);
      break;
  }
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!generalContainer.dataset.searching && searchInput.value.trim() != '') {
    searchLocation(e);
  }
});

searchIcon.addEventListener('click', (e) => {
  if (searchForm.value) searchLocation(e);
});

generalContainer.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.contains('display-more')) {
    View.displayCardInfo(e);
  }
});
