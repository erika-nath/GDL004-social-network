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
    init: () =>{
        const form = document.getElementById('form-marcadores');
               
            form.addEventListener('submit', (e) =>{
                e.preventDefault();
                const nuevomarcador={
                    id:Date.now(),
                    nombre:form.nombre.value,
                    descripcion: form.descripcion.value,
                    URL: form.url.value

                }
                form.reset();
                controlador.agregarMarcador(nuevomarcador);
            });
    }
};


export { components, vista  };