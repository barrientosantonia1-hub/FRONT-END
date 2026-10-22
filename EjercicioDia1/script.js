const tarjeta = document.querySelector('article');
const boton = document.getElementById('boton-parpadiar');

function ActivarModoCyberpunk() {
    tarjeta.style.backgroundColor = '#0f0c1b'; 
    tarjeta.style.color = '#ffffff';           


    setTimeout(function() {
        tarjeta.style.backgroundColor = '#f1f2f6'; 
        tarjeta.style.color = '#2f3542';           
    }, 500); // 500 milisegundos = 0.5 segundos
}

boton.addEventListener('click', ActivarModoCyberpunk);