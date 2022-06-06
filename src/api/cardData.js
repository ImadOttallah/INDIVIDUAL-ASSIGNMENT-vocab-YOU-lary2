import axios from 'axios';

const getCards = () => new Promise((resolve, reject) => {
  axios.get()
    .then((response) => resolve((response)))
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

const createCard = () => new Promise((resolve, reject) => {
  axios.get()
    .then((response) => resolve((response)))
    .catch(reject);
});

export {
  getCards,
  deleteCard,
  updateCard,
  getSingleCard,
  createCard,
};
