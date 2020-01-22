export default () =>{
    const viewLogin = `

    <div class="logoNeek">
        <img src="images/Logo Neek.png" alt="Logo neek" width="180">
    </div>

    
    <form id="form-marcadores">
      <div>
        <label for="email-input">Email:</label>
        <input name="nombre" type="email" id="email-input"/>
      </div>
      <div>
        <label for="password-input">Password:</label>
        <input name="password" type="password"id="password-input"/>
      </div>
        <button type="submit">Login</button>
    </form>
    <div id="lista-marcadores"></div>`


    

    const divElemt = document.createElement('div');
  divElemt.innerHTML = viewLogin;
  return divElemt;
    
};

