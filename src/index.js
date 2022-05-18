import './styles/style.scss';
import { weatherInformation } from './js/model.js';
import { View } from './js/view.js';

const searchInput = document.querySelector('#location-search');
const searchForm = document.querySelector('.search-container');
const searchIcon = document.querySelector('#search-icon');
const sectionContainer = document.querySelector('.sections');
let locationInfo;
let weatherInfo;

(async function displayOnLoad() {
  locationInfo = await weatherInformation.getLocation('Roma');
  weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
  View.todaySection(weatherInfo, locationInfo.cityName, locationInfo.country);
})();

async function searchLocation(e) {
  e.preventDefault();
  locationInfo = await weatherInformation.getLocation(searchInput.value);
  weatherInfo = await weatherInformation.fetchData(locationInfo.latLon);
  console.log(weatherInfo);
  searchInput.value = '';
  View.todaySection(weatherInfo, locationInfo.cityName, locationInfo.country);
}

sectionContainer.addEventListener('click', async function (e) {
  let activeSection = document.querySelector('.active-section');
  if (e.target.classList.contains('section-name')) {
    activeSection.classList.remove('active-section');
    e.target.classList.add('active-section');
    switch (e.target.id) {
      case 'today-section':
        await View.todaySection(
          weatherInfo,
          locationInfo.cityName,
          locationInfo.country
        );
        break;
      case 'tomorrow-section':
        View.tomorrowSection();
        break;
      case 'six-days-section':
        View.sixDaysSection();
        break;
    }
  }
});

searchForm.addEventListener('submit', (e) => {
  searchLocation(e);
});

searchIcon.addEventListener('click', (e) => {
  if (searchForm.value) searchLocation(e);
});
