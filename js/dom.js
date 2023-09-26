function init(){

    let contenedor =document.getElementById("resultado");

    let p1 =document.createElement("p");
    let p1Texto = document.createTextNode("Parrafo1");
    p1.appendChild(p1Texto);

    let p2 =document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo2");
    p2.appendChild(p2Texto);

    

}

window.onload = init;