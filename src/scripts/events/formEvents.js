import { createCard, updateCard } from '../../api/cardData';
import { showCards } from '../pages/cards';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        language_tech: document.querySelector('#language_tech').value,
        definition: document.querySelector('#definition').value,
        time: Date.now(),
        uid,
      };
      console.warn(cardObj);
      createCard(cardObj).then((cardArray) => showCards(cardArray));
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        language_tech: document.querySelector('#language_tech').value,
        definition: document.querySelector('#definition').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
        uid
      };
      updateCard(cardObj).then(showCards);
    }
  });
};
export default formEvents;
