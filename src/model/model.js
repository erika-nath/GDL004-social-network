    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyBp8Ek-Par5Ve7dueA_KXeEuPgy5LTVAvU",
      authDomain: "redsocialpyms.firebaseapp.com",
      databaseURL: "https://redsocialpyms.firebaseio.com",
      projectId: "redsocialpyms",
      storageBucket: "redsocialpyms.appspot.com",
      messagingSenderId: "805493546958",
      appId: "1:805493546958:web:595c07e416678ae3a6159f",
      measurementId: "G-85FVMYY0QX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


export const modelo = {
    marcadores: [],

    authEmailAndPassword: (objetoUser) => {
      //firebase auth
    },

    authCuentaFacebook:() => {
      
        const provider = new firebase.auth.FacebookAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then(result => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
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
