export default () => {
  const viewSignup = `
        <div class="navLogin">
            <a href="#/Login">Login</a>
        </div>

        <h1 class="text-signup">SIGN UP HERE</h1>

        <form id="form-signup">

            <div>
                <input name="userName" type="text" placeholder="Name:"id="nombreUserSignup"/>
            </div>

            <p id="textOptionsSignup">Select an account type</p>

            <select id="selectTypesSignup" checked>
                <option id=txtEntrepreneurs value="entrepreneurs">Entrepreneurs</option>
                <option id=txtInvestor value="investor">Investor</option>
            <select/>

            <textarea name="descriptionArea" id="textAreaSignup" width="50" heigth="100" placeholder="Give us a short description about your project"></textarea>


            <input  placeholder="Email:" name="email" type="email" id="inputEmalSignup"/>
            <input placeholder="Paassword:" name="password" type="password"id="inputPasswordSignup"/>
            
            <button type="submit" id="buttonSignup">Sign Up</a></button>

        </form>
        
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewSignup;
  return divElement;
};
