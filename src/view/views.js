import Login from './login.js';
import Home from './home.js';
import Signup from './signup.js';
import { controlador } from '../view-controler/index.js';

// EN ESTA PAGINA SE CREA EL OBJETO DE LAS DIFERENTES VISTAS
const components = {
  home: Home,
  login: Login,
  signup: Signup,

};

const vista = {
  init: {
    signup: () => {
      const formSignup = document.getElementById('form-signup');
      formSignup.addEventListener('submit', (e) => {
        e.preventDefault();
        const userdata = {
          name: formSignup.userName.value,
          type: formSignup.selectTypesSignup.value,
          description: formSignup.descriptionArea.value,
          email: formSignup.email.value,
          password: formSignup.password.value,
        };
        if (userdata.email !== '' && userdata.password.length >= 6) {
          controlador.authEmailAndPassword(userdata);
        } else {
          alert('*   PLEASE FILL ALL THE FIELS   *');
        }
      });
    },
    login: () => {
      const imgFacebook = document.getElementById('imgLogoFB');
      const imgGoogle = document.getElementById('imgLogoGoogle');
      const formLogin = document.getElementById('formLogin');

      formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const userDataLogin = {
          email: formLogin.email.value,
          password: formLogin.password.value,
        };
        if (userDataLogin.email !== '' && userDataLogin.password.length >= 6) {
          controlador.loginEmailAndPassword(userDataLogin);
        } else {
          alert('Please check again your information');
        }
      });

      imgFacebook.addEventListener('click', () => {
        controlador.authWithFacebook();
      });
      imgGoogle.addEventListener('click', () => {
        controlador.authWithGoogle();
      });
    },

    signOut: () => {
      const buttonSignOut = document.getElementById('buttonSignOut');
      buttonSignOut.addEventListener('click', () => {
        controlador.signOut();
      });
  
    },

  },
};

export { components, vista };