import { createCard } from '../../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.dispatchEvent.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
      };
      console.warn('Clicked Submit Book', e.target.id);
      createCard(cardObj).then((cardArray) => showCards(cardArray));
    }
  });
};
export default formEvents;
