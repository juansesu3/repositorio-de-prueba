let boton = document.getElementById("sumar");
let respuesta = document.getElementById("respuesta");

boton.addEventListener("click", hacerSuma);

function hacerSuma(){
    let n1 = parseInt( document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    console.log(n2, n1)

    let s = n1 + n2;

    respuesta.innerHTML = `la suma es ${s}`;
};
