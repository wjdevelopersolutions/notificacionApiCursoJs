
let paises = ["Republica Dominicana", "Honduras", "Nicaragua", "Cuba", "Puerto Rico", "Mexico"];

const nuevoPais = (pais, callback) => {

    setTimeout(() => {
        paises = [...paises, pais];
        callback();
    },3000);
}

const mostrarPaises = () => {

    setTimeout(() => {

        paises.map(pais => {
            console.log(pais)
        });

    }, 2000)
}

mostrarPaises();
nuevoPais("Chile", mostrarPaises)
