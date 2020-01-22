import { components } from '../view/views.js'


const changeView = (route) => {
    const container =document.getElementById('container');
    container.innerHTML='';
   switch (route) {
       case '#/Login': {
           return container.appendChild(components.login())
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
};

export { changeView };