import {
  deleteCard, getSingleCard
} from '../../api/cardData';
import addCard from '../components/forms/addCard';
import { showCards } from '../pages/cards';
import viewCard from '../pages/viewCard';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the entry?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addCard(uid, cardObj));
    }
    if (e.target.id.includes('view-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('eeeee');
      getSingleCard(firebaseKey).then((cardObj) => viewCard(cardObj));
    }
  });
};
export default domEvents;
