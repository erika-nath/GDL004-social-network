export default () => {
  const viewHome = `

    <button type="submit" id="buttonSignOut">Sign Out</a></button>
        <div class='homePage'>

            <div class='logoNeekHomePage'>
                <img src="./images/Logo Neek.png" 
                alt="Logo neek" 
                width="145">
            </div>

            <div class='neekTextHomePage'>
                <h2><strong>NEEK</strong></h2>
            </div>

            <div class='textSocialNHomePage'>
                <h4>The social network for entrepreneurs</h4>
            </div>
        </div>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;
  return divElement;
};
