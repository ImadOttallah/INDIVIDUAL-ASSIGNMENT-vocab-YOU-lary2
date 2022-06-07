import addCard from '../components/forms/addCard';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-card-btn')) {
      console.warn('add card');
      addCard();
    }
  });
};

export default navEvents;
