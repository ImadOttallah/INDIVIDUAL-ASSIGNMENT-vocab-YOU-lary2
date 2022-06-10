import { deleteCard, filterCards, getSingleCard } from '../../api/cardData';
import addCard from '../components/forms/addCard';
import { showCards } from '../pages/cards';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete the entry?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCard(firebaseKey).then((cardsArray) => showCards(cardsArray));
      }
    }
    if (e.target.id.includes('edit-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('eeeee');
      getSingleCard(firebaseKey).then((cardObj) => addCard(cardObj));
    }
    if (e.target.id.includes('filter')) {
      const [, language] = e.target.id.split('--');
      filterCards(language).then((showCards));
    }
  });
};
export default domEvents;
