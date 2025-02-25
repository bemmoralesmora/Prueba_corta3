import { resaltarProducto, agregarCarrito } from "./funcionesProducto.js";

function producto(productoData) {
    let contenedor = document.createElement("div");
    contenedor.className = "cont-producto";

    contenedor.addEventListener("click", () => resaltarProducto(contenedor));

    let imgCont = document.createElement('div');
    imgCont.className = "img-cont";

    let img = document.createElement('img');
    img.src = productoData.imagen; 
    img.alt = productoData.nombre; 
    img.className = "img-producto";
    imgCont.appendChild(img);

    contenedor.appendChild(imgCont);

    let nombreProducto = document.createElement('h1');
    nombreProducto.textContent = productoData.nombre; 
    contenedor.appendChild(nombreProducto);

    let cont_p_b = document.createElement('div');
    cont_p_b.className = "cont-p-b";
    contenedor.appendChild(cont_p_b);

    let precio = document.createElement('h1');
    precio.textContent = `$${productoData.precio}`; 
    precio.className = "precio";
    cont_p_b.appendChild(precio);

    let boton = document.createElement('button');
    boton.textContent = "Agregar"; 
    boton.className = "agregar";
    boton.addEventListener("click", (e) => {
        e.stopPropagation(); 
        agregarCarrito(); 
    });
    cont_p_b.appendChild(boton);

    return contenedor;
}

export { producto };