
export default () => {
  const viewLogin = `


    <div class="logoNeek">
        <img src="images/Logo Neek.png" alt="Logo neek" width="180">
    </div>
    
        <input 
            name="email"
            type="email" 
            id="email"
            placeholder="Email:">
        </input>
        <input 
            name="password"
            type="password" 
            id="password" 
        placeholder="Password:">
        </input>
   
    `;
  //  Se crea boton Login
  const button = document.createElement('button');
  button.innerHTML = 'Login';
  button.setAttribute('id', 'bottonLogin');
  button.setAttribute('name', 'button');
  //  crear
  const textsignup = document.createElement('p');
  const divImgFB = document.createElement('div');
  const imgFacebook = document.createElement('img');
  const divImgGoogle = document.createElement('div');
  const imgGoogle = document.createElement('img');
  const divImgsFBGoogle = document.createElement('div');
  divImgsFBGoogle.classList.add('imgsFByGoogleSignup');
  //  inyecta con atributos
  textsignup.innerHTML = 'Or sign up with';
  imgFacebook.setAttribute('src', './images/logoFacebook.png');
  imgFacebook.setAttribute('width', '70');
  imgFacebook.setAttribute('id', 'imgLogoFB');
  imgGoogle.setAttribute('src', './images/logoGoogle.png');
  imgGoogle.setAttribute('width', '55');
  imgGoogle.setAttribute('id', 'imgLogoGoogle');

  divImgFB.appendChild(imgFacebook);
  divImgGoogle.appendChild(imgGoogle);


  divImgsFBGoogle.appendChild(divImgFB);
  divImgsFBGoogle.appendChild(divImgGoogle);

  // crea script de abajo
  const text = document.createElement('p');
  text.innerHTML = '¿Don´t have an account?';
  const areference = document.createElement('a');
  areference.setAttribute('href', URL = '#/SignUp');
  areference.innerHTML = 'Sign Up';
  text.appendChild(areference);
  const formcontainer = document.createElement('form');
  formcontainer.setAttribute('id', 'formLogin');
  formcontainer.classList.add('loginPage');
  formcontainer.innerHTML = viewLogin;
  formcontainer.appendChild(button);
  formcontainer.appendChild(textsignup);
  formcontainer.appendChild(divImgsFBGoogle);
  formcontainer.appendChild(text);
  return formcontainer;
};
