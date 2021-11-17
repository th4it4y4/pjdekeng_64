import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqiat7h4T8jXsjWaE2L2uhEP1ZnH-shN0",
  authDomain: "reactnative-login-e2226.firebaseapp.com",
  projectId: "reactnative-login-e2226",
  storageBucket: "reactnative-login-e2226.appspot.com",
  messagingSenderId: "785231276360",
  appId: "1:785231276360:web:b77851545835230cd66b7d",
  measurementId: "G-B8P1ZG9XLK"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
