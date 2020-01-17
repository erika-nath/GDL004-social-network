export default () =>{
    const viewLogin = `
    <div class="logoNeek">
        <img src="images/LogoNeek.png" alt="Logo neek" width="180">
    </div>
    <h2>
        <strong>NEEK</strong>
    </h2>
    <h4>
        Welcome to the social network from entrepreneurs
    </h4>
    <input 
        type="email" 
        id="email"
        placeholder="e-mail">
    </input>
    <input 
        type="password" 
        id="password" 
      placeholder="password">
    </input>
    `;

    const button = document.createElement('button');
        button.innerHTML="Login";
        button.addEventListener('click',UserData);

    const text= document.createElement('p');
        text.innerHTML="¿Don´t have an account?";
        const areference= document.createElement('a');
        areference.setAttribute('href', URL='#/SignUp');
        areference.innerHTML="Sign Up"
        text.appendChild (areference);

    const divcontainer = document.createElement('div');
        divcontainer.innerHTML= viewLogin;
        divcontainer.appendChild(button);
        divcontainer.appendChild(text);

    const divElement = document.createElement ('div');
        divElement.appendChild ( divcontainer);

    return divElement;

};

function UserData (){
    const userEmail= document.getElementById('email').value;
    const userPassword= document.getElementById('password').value;
    console.log(userEmail+userPassword);
 
};





