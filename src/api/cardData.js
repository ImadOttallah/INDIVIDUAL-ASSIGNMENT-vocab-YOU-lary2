import axios from 'axios';
import { showCards } from '../scripts/pages/cards';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab_cards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteCard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab_cards/${firebaseKey}.json`)
    .then(() => {
      getCards(uid).then((cardsArray) => resolve(cardsArray));
    })
    .catch(reject);
});

const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab_cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards(cardObj.uid).then(resolve))
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
          getCards(cardObj.uid).then(resolve);
        });
    }).catch(reject);
});

const filterCards = (uid, language) => {
  getCards(uid).then((response) => {
    const sortCards = response.filter((card) => card.language_tech === language);
    showCards(sortCards, uid);
  });
};

export {
  getCards,
  deleteCard,
  updateCard,
  getSingleCard,
  createCard,
  filterCards,
};
