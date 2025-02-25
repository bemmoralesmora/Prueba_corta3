function mostrarMenu() {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor-header";

    let img = document.createElement('div');
    img.className = "img-header";
    img.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" alt="">
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
    numero.textContent = "0"; 
    cont.appendChild(numero);

    return contenedor;
}

export { mostrarMenu };