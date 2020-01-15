import { components } from '../view/views.js'


const changeView = (route) => {
    const container =document.getElementById('container');
    container.innerHTML='';
   switch (route) {
       case '#/': {return container.appendChild(components.home())}
       case '#/Login': {return container.appendChild(components.login())}
       case '#/SignUp': {return container.appendChild(components.signup())}
       case '#/Profile': {return container.appendChild(components.profile())}


                 
          default:
           break;
   }
};

export { changeView };