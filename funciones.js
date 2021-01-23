import Button from './componentes/button/Button.js';
import { contenedor } from './selectors.js';

export function crearBotones() {

    const button1 = new Button('Notificarme', ["btn", "btn-primary", "mx-1"]);

    const button2 = new Button('Ver notificarme', ["btn", "btn-success", "mx-1"], {
        margin: '5px',
        fontColor: '#fff'
    });

    const button3 = new Button('Fullscreen', ["btn", "btn-danger", "mx-1"], {
        margin: '5px',
        fontColor: '#fff'
    });

    const button4 = new Button('Salir de fullscreen', ["btn", "btn-warning", "mx-1"], {
        margin: '5px',
        fontColor: '#fff'
    });

    const buttons = [ button1, button2, button3, button4 ];

    buttons.forEach(button => {
        contenedor.appendChild(button);
    });

}