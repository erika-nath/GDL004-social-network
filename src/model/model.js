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
        alert("se registro correctamente");
      }).catch((err) => {
        alert("ocurrio un error intentelo de nuevo");
      });
    },

    authCuentaFacebook:() => {
      const providerFacebook = new firebase.auth.FacebookAuthProvider();
      firebase.auth().sigInWhithPopup(providerFacebook).then(res=>{
        document.location.href="#/home";
      }).catch(err=>{
        alert(err);
      })

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
