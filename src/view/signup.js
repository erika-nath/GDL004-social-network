export default () =>{
    const viewSignup = `
        <h1>SIGN UP HERE</h1>

        <form id="form-signup">
            <div>
                <label for="email-input">Email</label>
                <input name="email" type="email" id="nombre-input"/>
            </div>
            <div>
                <label for="password-input">Password</label>
                <input name="password" type="password"id="password-input"/>
            </div> 
            <button type="submit">Login</a></button>
        </form>
        
    `;

    const divElement = document.createElement ('div');
        divElement.innerHTML = viewSignup;
    return divElement;
};








