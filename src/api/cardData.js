import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab_cards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab_cards/${firebaseKey}.json`)
    .then(() => {
      getCards().then((cardsArray) => resolve(cardsArray));
    })
    .catch(reject);
});

const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab_cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards(cardObj).then(resolve))
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab_cards/${firebaseKey}.json`)
    .then((response) => resolve((response.data)))
    .catch(reject);
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab_cards.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab_cards/${response.data.name}.json`, payload)
        .then(() => {
          getCards().then(resolve);
        });
    }).catch(reject);
});

const filterCards = (cardObj) => new Promise((resolve, reject) => {
  getCards().then((response) => resolve(response.filter((card) => card.language_tech === cardObj)))
    .catch(reject);
});

export {
  getCards,
  deleteCard,
  updateCard,
  getSingleCard,
  createCard,
  filterCards,
};
