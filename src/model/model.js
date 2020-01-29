import { controlador } from '../view-controler/index.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAXoKJeXka7gPwpuMFHtZgLy5BoiATMiXY',
  authDomain: 'redsocialneek.firebaseapp.com',
  databaseURL: 'https://redsocialneek.firebaseio.com',
  projectId: 'redsocialneek',
  storageBucket: 'redsocialneek.appspot.com',
  messagingSenderId: '1026159709574',
  appId: '1:1026159709574:web:aa67bc56111bc75482b007',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


async function authCuentaFFunction() {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  await firebase.auth().signInWithPopup(providerFacebook)
    .then(() => {
      controlador.detecthash('#/home');
    }).catch(() => {
      alert('Try again, please');
    });
}

export const modelo = {
  marcadores: [],
  authEmailAndPassword: async function authUser(objetoUser) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(objetoUser.email, objetoUser.password);
      controlador.detecthash('#/home');
    } catch (e) {
      alert('The email address is already in use, please login');
    }
  },

  loginEmailAndPassword: async function loginUser(objetoLogin) {
    try {
      await firebase.auth().signInWithEmailAndPassword(objetoLogin.email, objetoLogin.password);
      controlador.detecthash('#/home');
    } catch (e) {
      alert('please, check your information');
    }
  },

  authCuentaFacebook: authCuentaFFunction,
  

  authCuentaGoogle: async function () {
    const providerGoogle = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(providerGoogle)
      .then(res => {
        controlador.detecthash('#/home');
      }).catch(err => {
        alert('Try again, please');
      });
  },

  signOut: async function () {
    await firebase.auth().signOut();
    controlador.detecthash('#/Login');
  },
};
