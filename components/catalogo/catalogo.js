import { producto } from "./itemProducto.js";
import { dataProductos } from "./data.js";

function cargarProductos() {
    let catalogo = document.createElement('div');
    catalogo.className = "catalogo";

    // Recorrer la lista de productos y crear un elemento para cada uno
    dataProductos.forEach(productoData => {
        catalogo.appendChild(producto(productoData));
    });

    return catalogo;
}

export { cargarProductos };