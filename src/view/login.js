export default () => {
    const viewLogin = `

<div>
    <img src="images/LogoNeek.png" alt="Logo neek" width="180">
</div>

<h2><strong>NEEK</strong><//strong>
</h2>
<h4>Welcome to the social network from entrepreneurs</h4>
<input type="email"></input>
<input type="password"></input>
<button>Log in</button>
<p>Or sign in whith...</p>
<p>Create an account...
    <a href="#/Login">sign up here</a>
</p>

`;
    const divElement = document.createElement('div');
    divElement.classList.add('log-in')
    divElement.innerHTML = viewLogin;
    return divElement;

};