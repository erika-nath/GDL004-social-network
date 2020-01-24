import  Login  from './login.js'
import  Home  from './home.js'
import  Signup  from './signup.js'
import { controlador } from '../view-controler/index.js'

// EN ESTA PAGINA SE CREA EL OBJETO DE LAS DIFERENTES VISTAS
const components ={
    home:Home,
    login:Login,
    signup:Signup,

};

const vista ={
    init: {
        signup: () => {
          const formSignup = document.getElementById('form-signup');
         
          formSignup.addEventListener('submit', (e) => {
            e.preventDefault()
            const userdata = {
              name: formSignup.userName.value,
              type: formSignup.selectTypesSignup.value,
              description: formSignup.descriptionArea.value,
              email: formSignup.email.value,
              password: formSignup.password.value
            }
            
            controlador.authEmailAndPassword(userdata);
            if(userdata.email !== '' && userdata.password !== '' && userdata.password.length >= 6){
              controlador.detecthash("#/home");
              
            } else {
              alert("*   PLEASE FILL ALL THE FIELS   *")
            
            }
          })
          
        },
        login:() => {
          const imgFacebook = document.getElementById('imgLogoFB');
          const imgGoogle = document.getElementById('imgLogoGoogle')
        
          imgFacebook.addEventListener('click', () =>{
            controlador.authWithFacebook();
          });
        }

      }
};

export { components, vista  };