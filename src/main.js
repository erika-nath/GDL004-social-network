import { changeView } from './view-controler/index.js'

//Se hace el cambio de url despues de hash y muestra la vista segun la seleccion
const init = () => {
        changeView(window.location.hash)
        window.addEventListener('hashchange', ( => changeView(window.location.hash))
        }

        window.addEventListener('load', init)