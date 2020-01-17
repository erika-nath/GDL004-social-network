export default () =>{
    const viewSignup = `
        
        <h4>
            PRUEBA DE SIGN UP
        </h4>
        
        `;

    const button = document.createElement('button');
        button.innerHTML="Login";
        button.addEventListener('click',UserData);

    const text= document.createElement('p');
        text.innerHTML="¿Don´t have an account?";

    const divcontainer = document.createElement('div');
        divcontainer.innerHTML= viewSignup;
        divcontainer.appendChild(button);
        divcontainer.appendChild(text);

    const divElement = document.createElement ('div');
        divElement.appendChild ( divcontainer);
    return divElement;


};

function UserData (){
    const userEmail= document.getElementById('email').value;
    const userPassword= document.getElementById('password').value;
 
};
    






