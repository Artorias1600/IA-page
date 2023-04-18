document.addEventListener('DOMContentLoaded', () => {
    const textoAnimado = document.querySelector('.texto-animado');
    const botonAnimado = document.querySelector('.boton-animado');

    // Agregamos la transición al estilo del elemento desde el principio
    textoAnimado.style.transition = 'opacity 2s';

    botonAnimado.addEventListener('click', () => {
        // Verificamos si el texto está oculto o visible y cambiamos la opacidad según corresponda
        if (textoAnimado.style.opacity === '0' || textoAnimado.style.opacity === '') {
            textoAnimado.style.opacity = '1';
        } else {
            textoAnimado.style.opacity = '0';
        }
    });
});
