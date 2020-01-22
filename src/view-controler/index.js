
import{ modelo } from '../model/model.js';
import { components, vista } from '../view/views.js';

export const controlador={
    init:() =>{
        vista.init();
    },

    agregarMarcador: (nuevomarcador)=>{
        modelo.agregaMarcador(nuevomarcador)
        vista.representarMarcadores();
    },

    obtenerMarcadores: () => {
        return modelo.obtenerMarcadores();
    },

    changeTmp: (route) => {
        const container =document.getElementById('container');
        container.innerHTML='';
       switch (route) {
           case '#/Login': {
                container.appendChild(components.login())
                
                break;
            }
    
           case '#/SignUp': {
               return container.appendChild(components.signup())
                break;
            }
                  
            default: {
                return container.appendChild(components.home());
                
                break;
             }
       }

    
    }
};

