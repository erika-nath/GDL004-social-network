import { controlador } from '../view-controler/index.js';

var firebaseConfig = {
  apiKey: "AIzaSyAXoKJeXka7gPwpuMFHtZgLy5BoiATMiXY",
  authDomain: "redsocialneek.firebaseapp.com",
  databaseURL: "https://redsocialneek.firebaseio.com",
  projectId: "redsocialneek",
  storageBucket: "redsocialneek.appspot.com",
  messagingSenderId: "1026159709574",
  appId: "1:1026159709574:web:aa67bc56111bc75482b007"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const modelo = {
    marcadores: [],

    authEmailAndPassword: async function(objetoUser) {  
      await firebase.auth().createUserWithEmailAndPassword(objetoUser.email, objetoUser.password)
      .then((res) => {
        alert('successfully registered') 
        controlador.detecthash("#/home");
  
      }).catch((err) => {
        alert('please verify your information and try again');
      });
      
    },

    authCuentaFacebook: async function (){
      const providerFacebook = new firebase.auth.FacebookAuthProvider();
      await firebase.auth().signInWithPopup(providerFacebook)
      .then(res=>{
        controlador.detecthash("#/home");
      }).catch(err=>{
        alert('Try again, please');
      });
    },
    
    authCuentaGoogle:async function (){
      const providerGoogle = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(providerGoogle)
      .then(res=>{
        controlador.detecthash("#/home");
      }).catch(err=>{
        alert('Try again, please');
      });
    },


    agregaMarcador: (nuevoMarcador) => {
    return modelo.marcadores.push(nuevoMarcador)
    },
    obtenerMarcadores: () => {
      return modelo.marcadores;
    },
    eliminarMarcadores: () => {
  
    },
    editarMarcadores: () => {
  
    } 
  
  }
