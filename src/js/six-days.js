import { View } from './view';
import { weatherInformation } from './model';

const SixDaysModule = (function () {
  /**
   * Create cards for the next six days with weather information.
   * @param {object} weatherObj Weather object.
   * @returns {array} Returns array with html elements
   */
  const _createSixDaysCard = function (weatherObj) {
    let containerElements = [];
    const sectionTitle = View.createElement(
      'h3',
      'six-days-details',
      '',
      'Next six days'
    );
    containerElements.push(sectionTitle);

    for (let i = 1; i < weatherObj.length; i++) {
      const container = View.createElement('div', 'six-days-card');
      const upperContainer = View.createElement('div', 'upper-container');
      const tempContainer = View.createElement('div', 'temperature');
      const maxTemp = View.createElement(
        'p',
        'max-temp',
        '',
        `${Math.round(weatherObj[i].temp.max)} °C`
      );
      const minTemp = View.createElement(
        'p',
        'min-temp',
        '',
        `${Math.round(weatherObj[i].temp.min)} °C`
      );
      const cardDate = View.createElement(
        'p',
        'card-date',
        '',
        `${weatherInformation.convertDateToLocale(weatherObj[i].dt)}`
      );
      const weatherIcon = View.createElement('img', 'six-days-icon');
      weatherIcon.alt = `${weatherObj[i].weather[0].description}`;
      weatherIcon.src = `http://openweathermap.org/img/wn/${weatherObj[i].weather[0].icon}@2x.png`;
      const spanMoreInfo = View.createElement(
        'span',
        'material-symbols-outlined',
        '',
        'expand_circle_down'
      );
      spanMoreInfo.title = 'Click for more information';
      spanMoreInfo.classList.add('display-more');

      const infoContainer = View.createElement('div', 'six-days-info');
      let moreInformation = View.updateMoreInformation(weatherObj[i], [
        'humidity',
        'uvi',
        'wind_speed',
      ]);
      container.append(upperContainer, infoContainer);
      upperContainer.append(tempContainer, cardDate, weatherIcon, spanMoreInfo);
      tempContainer.append(maxTemp, minTemp);
      moreInformation.forEach((html) => infoContainer.append(html));
      containerElements.push(container);
    }
    return containerElements;
  };

  /**
   * Clear content, creates containers and append next six days cards.
   * @param {object} weatherObj Weather object.
   *
   */
  function sixDaysSection(weatherObj) {
    View.clearContent();
    View.createContainers(true);
    _createSixDaysCard(weatherObj.daily).forEach((html) =>
      document.querySelector('.cards').append(html)
    );
  }

  return {
    sixDaysSection,
  };
})();

export { SixDaysModule };
