import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  navEvents(user.uid);
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};
export default startApp;
