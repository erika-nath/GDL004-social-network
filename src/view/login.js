
export default () =>{
    const viewLogin = `
    <div class="logoNeek">
        <img src="images/Logo Neek.png" alt="Logo neek" width="180">
    </div>
    
    <input 
        type="email" 
        id="email"
        placeholder="Email:">
    </input>
    <input 
        type="password" 
        id="password" 
      placeholder="Password:">
    </input>
    `;

    const button = document.createElement('button');
        button.innerHTML="Login";
        button.setAttribute('id', 'bottonLogin');
        

    
    const textsignup= document.createElement('p');
    const divImgFB= document.createElement('div');
    const imgFacebook= document.createElement('img');
    const divImgGoogle= document.createElement('div');
    const imgGoogle= document.createElement('img');
    const divImgTw= document.createElement('div');
    const imgTwitter= document.createElement('img');
    const divImgsFBGoogle= document.createElement('div');
    divImgsFBGoogle.classList.add('imgsFByGoogleSignup');


    textsignup.innerHTML="Or sign up with"
    imgFacebook.setAttribute('src', './images/logoFacebook.png');
    imgFacebook.setAttribute('width', '70');
    imgGoogle.setAttribute('src', './images/logoGoogle.png');
    imgGoogle.setAttribute('width', '55');
    imgTwitter.setAttribute('src', './images/LogoTwitter.png'); 
    imgTwitter.setAttribute('width', '50');

    
    divImgFB.appendChild(imgFacebook);
    divImgGoogle.appendChild(imgGoogle);
    divImgTw.appendChild(imgTwitter); 

    divImgsFBGoogle.appendChild(divImgFB);
    divImgsFBGoogle.appendChild(divImgGoogle);
    divImgsFBGoogle.appendChild(divImgTw); 


    const text= document.createElement('p');
        text.innerHTML="¿Don´t have an account?";
        const areference= document.createElement('a');
        areference.setAttribute('href', URL='#/SignUp');
        areference.innerHTML="Sign Up"
        text.appendChild (areference);
    
     

    const divcontainer = document.createElement('div');
        divcontainer.classList.add('loginPage');
        divcontainer.innerHTML= viewLogin;
        divcontainer.appendChild(button);
        divcontainer.appendChild(textsignup);
        divcontainer.appendChild(divImgsFBGoogle);
        divcontainer.appendChild(text);
        

    return divcontainer;

};








