const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = false;

    if ( descuento ) {
        resolve('Descuento aplicado.')
    } else {
        reject('No se pudo aplicar el descuento.')
    }
});

aplicarDescuento
    .then(

        resp => {
        console.log(resp)
        },
        err => {
            console.log(err);
        }

    )
    .finally(() => {
        console.log('Se completo la promesa');
    });


/* ==============================================================
    console.log(aplicarDescuento);

    Hay tres valores posible.

    - fulfilled = el promise se cumplio.
    - rejected = el promise no se cumplio.
    - pending = no se ha cumplido y tampoco fue rechazado.

    Salida en la consola del navegador
    Promise {<fulfilled>: "Descuento aplicado."}
    Promise {<rejected>: "No se pudo aplicar el descuento."}
    Promise {<pending>}
===============================================================*/