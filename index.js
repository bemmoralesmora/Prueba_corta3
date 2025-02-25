import { mostrarMenu } from "./components/header/header.js";
import { cargarProductos } from "./components/catalogo/catalogo.js";

function iniciarApp(){
    let dom = document.querySelector("#root");
    dom.className = "dom";

    dom.appendChild(mostrarMenu());
    dom.appendChild(cargarProductos());
    return dom;
}

iniciarApp();