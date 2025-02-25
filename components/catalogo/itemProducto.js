// itemProducto.js
import { resaltarProducto, eliminarProducto } from "./funcionesProducto.js";

function producto(productoData) {
    let contenedor = document.createElement("div");
    contenedor.className = "cont-producto";

    // Agregar un evento para resaltar el producto al hacer clic
    contenedor.addEventListener("click", () => resaltarProducto(contenedor));

    let imgCont = document.createElement('div');
    imgCont.className = "img-cont";

    // Crear la imagen y asignar la URL
    let img = document.createElement('img');
    img.src = productoData.imagen; // Usar la URL de la imagen
    img.alt = productoData.nombre; // Texto alternativo para accesibilidad
    img.className = "img-producto";
    imgCont.appendChild(img);

    contenedor.appendChild(imgCont);

    let nombreProducto = document.createElement('h1');
    nombreProducto.textContent = productoData.nombre; // Usar el nombre del producto
    contenedor.appendChild(nombreProducto);

    let cont_p_b = document.createElement('div');
    cont_p_b.className = "cont-p-b";
    contenedor.appendChild(cont_p_b);

    let precio = document.createElement('h1');
    precio.textContent = `$${productoData.precio}`; // Usar el precio del producto
    precio.className = "precio";
    cont_p_b.appendChild(precio);

    let boton = document.createElement('button');
    boton.textContent = "Eliminar";
    boton.className = "eliminar";
    boton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evitar que el evento de clic del contenedor se active
        eliminarProducto(contenedor);
    });
    cont_p_b.appendChild(boton);

    return contenedor;
}

export { producto };