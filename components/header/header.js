function mostrarMenu(){
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-header";

    let img = document.createElement('div');
    img.className = "img-header";
    img.innerHTML = `
    <img src="https://png.pngtree.com/png-clipart/20231005/original/pngtree-minimalist-lion-vector-logo-png-image_13279470.png" alt="">
    `;
    contenedor.appendChild(img);

    let cont = document.createElement('div');
    cont.className = "cont";
    contenedor.appendChild(cont);

    let texto = document.createElement('h1');
    texto.className = "texto-header";
    texto.textContent = "productos marcados";
    cont.appendChild(texto);

    let numero = document.createElement('div');
    numero.className = "numero-header";
    numero.textContent = "5";
    cont.appendChild(numero);

    return contenedor;

}

export {mostrarMenu};