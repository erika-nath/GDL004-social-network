export default () =>{
    const viewProfile = `
    
    <h2><strong>this is your profile</strong></h2>
    
    `
    const divElement = document.createElement ('div');
    divElement.innerHTML = viewProfile;
    return divElement;
}

