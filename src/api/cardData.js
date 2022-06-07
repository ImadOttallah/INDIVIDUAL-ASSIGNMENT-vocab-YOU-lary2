import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab_cards.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const deleteCard = () => new Promise((resolve, reject) => {
  axios.get()
    .then((response) => resolve((response)))
    .catch(reject);
});

const updateCard = () => new Promise((resolve, reject) => {
  axios.get()
    .then((response) => resolve((response)))
    .catch(reject);
});

const getSingleCard = () => new Promise((resolve, reject) => {
  axios.get()
    .then((response) => resolve((response)))
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

export {
  getCards,
  deleteCard,
  updateCard,
  getSingleCard,
  createCard,
};
