// document.write ("Hola bro ¿todo bien?")
//Si bro, todo bien
// me alegro bro

//para que esto?

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.querySelector(".Carrousel-items");
    const intervalo = 60000; // 60 segundos en milisegundos
    const desplazamiento = 1500;
    let scrollPosition = 0;

    const start = () => {
        const scrollWidth = contenedor.scrollWidth - contenedor.clientWidth;

        const scroll = () => {
            if (scrollPosition < scrollWidth) {
                contenedor.scrollLeft += desplazamiento;
                scrollPosition += desplazamiento;
            } else {
                contenedor.scrollLeft = 0; // Vuelve al inicio
                scrollPosition = 0;
            }
        };

        setInterval(scroll, intervalo);
    };

    start(); // Comienza el carrusel
});














