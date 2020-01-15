export default () =>{
    const viewSignup = `
    <div class="logoNeek"><img src="images/LogoNeek.png" alt="Logo neek" width="180"></div>
    <h2><strong>NEEK</strong></h2>
    <h4>Welcome to the social network from entrepreneurs</h4>
    <input type="email"></input>
    <input type="password"></input>
    <button>Log in</button>
    <p>Or Sign up whith...</p>
    <p>¿Don´t have an account?<a href="#/login">Login</a></p>
    `
    const divElement = document.createElement ('div');
    divElement.innerHTML = viewSignup;
    return divElement;
}