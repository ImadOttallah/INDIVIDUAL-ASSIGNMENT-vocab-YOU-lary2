import { getCards } from '../../api/cardData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showCards } from '../pages/cards';

const startApp = (user) => {
  domBuilder();
  navBar();
  formEvents(user.uid);
  navEvents(user.uid);
  getCards().then((cardsArray) => showCards(cardsArray));
  domEvents(user.id);
};
export default startApp;
