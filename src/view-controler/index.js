
import{ modelo } from '../model/model.js';
import { components, vista } from '../view/views.js';

export const controlador={
    init: {
        signup: () =>  vista.init.signup(),
        home: () => vista.init.home()
      },

      authEmailAndPassword: (obj) => {
        modelo.authEmailAndPassword(obj);
      },

        detecthash: (hash) => {
        location.hash = hash
        controlador.changeTmp(window.location.hash)
      },

      changeTmp: (hash) => {
        const container =document.getElementById('container');
        container.innerHTML='';
       switch (hash) {
           case'#/Login': 
                container.appendChild(components.login())
                break;
    
           case '#/SignUp': 
               container.appendChild(components.signup())
               controlador.init.signup() 
               break;
               
            
                  
            default: 
                return container.appendChild(components.home());
                
                break;
             
       }

    
    }
};
