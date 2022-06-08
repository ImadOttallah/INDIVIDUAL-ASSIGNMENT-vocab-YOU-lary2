import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/cards';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  formEvents();
  navEvents();
  getCards().then((cardsArray) => showCards(cardsArray));
};
export default startApp;
