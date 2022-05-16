import './styles/style.scss';
import { weatherInformation } from './js/model.js';
import { View } from './js/view.js';

const searchInput = document.querySelector('#location-search');
const searchForm = document.querySelector('.search-container');

searchForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  let info = await weatherInformation.requestData(searchInput.value);
  console.log(info);
  View.getIconIdCurrent(info);
});
