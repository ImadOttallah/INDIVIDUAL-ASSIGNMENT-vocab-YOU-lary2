import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/cards';

const startApp = () => {
  domBuilder();
  navBar();
  formEvents();
  navEvents();
  getCards().then((cardsArray) => showCards(cardsArray));
};
export default startApp;
