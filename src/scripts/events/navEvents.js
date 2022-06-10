import addCard from '../components/forms/addCard';
import signOut from '../helpers/auth/signOut';

const navEvents = () => {
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
};

export default navEvents;
