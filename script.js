const displayColor = document.getElementById("display-color");
const mostrarHexadecimal = document.getElementById("mostrar-hexadecimal")
const botonGeneradorColor = document.getElementById("generador-color");

let codigoHexadecimal;

botonGeneradorColor.addEventListener("click", event => {
    codigoHexadecimal = Math.random();
    codigoHexadecimal = codigoHexadecimal.toString(16);
    codigoHexadecimal = `#${codigoHexadecimal.substring(2, 8)}`;

    console.log(codigoHexadecimal);

    mostrarHexadecimal.value = codigoHexadecimal;
    displayColor.style.backgroundColor = codigoHexadecimal;
});