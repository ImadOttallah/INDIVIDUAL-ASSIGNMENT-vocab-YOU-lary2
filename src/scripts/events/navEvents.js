import { filterCards, getCards } from '../../api/cardData';
import addCard from '../components/forms/addCard';
import signOut from '../helpers/auth/signOut';
import { showCards } from '../pages/cards';

const navEvents = (uid) => {
  // document.querySelector('#navigation')
  //   .addEventListener('click', signOut);

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      console.warn('add card');
      addCard();
      if (e.target.id.includes('#google-auth')) {
        signOut();
      }
    }
  });
  document.querySelector('#add-button').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, language] = e.target.id.split('--');
      filterCards(uid, language);
    }
    if (e.target.id.includes('all-cards')) {
      getCards(uid).then((cardArray) => showCards(cardArray));
    }
  });
};

export default navEvents;
