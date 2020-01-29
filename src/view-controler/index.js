
import { modelo } from '../model/model.js';
import { components, vista } from '../view/views.js';
export const controlador = {
  changeTmp: (hash) => {
    const container = document.getElementById('container');
    container.innerHTML = ' ';
    switch (hash) {
      case '#/Login':
        container.appendChild(components.login());
        controlador.init.login();
        break;

      case '#/SignUp':
        container.appendChild(components.signup());
        controlador.init.signup();
        break;

      case '#/home':
        container.appendChild(components.home());
        controlador.init.signOut();
        break;
      default:
        container.appendChild(components.login());
        controlador.init.login();
        break;
    }
  },

  init: {
    signup: () => vista.init.signup(),
    signOut: () => vista.init.signOut(),
    login: () => vista.init.login(),
  },

  authEmailAndPassword: (obj) => {
    modelo.authEmailAndPassword(obj);
  },

  loginEmailAndPassword: (userDataLogin) => {
    modelo.loginEmailAndPassword(userDataLogin);
  },

  authWithFacebook: () => {
    modelo.authCuentaFacebook();
  },

  authWithGoogle: () => {
    modelo.authCuentaGoogle();
  },
  signOut: () => {
    modelo.signOut();
  },

  detecthash: (hash) => {
    location.hash = hash;
    controlador.changeTmp(window.location.hash);
  },
};
