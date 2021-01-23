const Button = function( texto, className ) {

    const button = document.createElement('button');

    // Add class names
    button.classList.add(...className);

    // Add text content 
    button.textContent = texto;

    return button;
}

export default Button;