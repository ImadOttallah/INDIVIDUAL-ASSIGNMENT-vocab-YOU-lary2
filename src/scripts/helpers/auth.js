import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/buttons/loginButton';
import firebaseConfig from '../../api/apiKeys';
import startApp from './startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
    } else {
      // person is NOT logged in
      loginButton();
    }
  });
};

export default checkLoginStatus;
