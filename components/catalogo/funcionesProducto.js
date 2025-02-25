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