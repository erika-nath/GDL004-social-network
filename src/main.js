import { controlador } from './view-controler/index.js'


const init = () => {
    //changeView (window.location.hash);
    controlador.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controlador.changeTmp(window.location.hash));

};

window.addEventListener('load', init);

 