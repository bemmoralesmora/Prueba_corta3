function resaltarProducto(contenedor) {
    document.querySelectorAll(".cont-producto").forEach(item => {
        item.style.backgroundColor = ""; 
    });

    contenedor.style.backgroundColor = "#e0f7fa"; 
}

export { resaltarProducto };


function eliminarProducto(contenedor) {
    contenedor.remove();
}

export { eliminarProducto };

function agregarCarrito() {
    let contador = document.querySelector(".numero-header");

    let valorActual = parseInt(contador.textContent);

    contador.textContent = valorActual + 1;
}

export {agregarCarrito};