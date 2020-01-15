export default () =>{
    const viewHome = `
    <div class="logoNeek"><img src="images/LogoNeek.png" alt="Logo neek" width="180"></div>
    <h2><strong>NEEK</strong></h2>
    <h4>Welcome to the social network from entrepreneurs</h4>
    `
    const divElement = document.createElement ('div');
    divElement.innerHTML = viewHome;
    return divElement;
}

