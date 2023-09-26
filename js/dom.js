function init(){

    let contenedor =document.getElementById("resultado");

    let p1 =document.createElement("p");
    let p1Texto = document.createTextNode("Parrafo1");
    p1.appendChild(p1Texto);

    let p2 =document.createElement("p");
    let p2Texto = document.createTextNode("Parrafo2");
    p2.appendChild(p2Texto);

    let p3 =document.createElement("p");
    let p3Texto = document.createTextNode("Parrafo3");
    p3.appendChild(p3Texto);

    contenedor.appendChild(p1);
    contenedor.appendChild(p2);
    contenedor.appendChild(p3);

    let enlace=document.createElement("a");
    enlace.setAttribute("href","https://frontendmasters.com/");
    let enlaceTexto = document.createTextNode ("Enlace");
    enlace.appendChild(enlaceTexto);

    contenedor.appendChild(enlace);

}

window.onload = init;