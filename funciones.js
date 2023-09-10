// document.write ("Hola bro ¿todo bien?")
//Si bro, todo bien
// me alegro bro
<<<<<<< HEAD
// y vos?

//para que esto?
//Ni idea che
seccionA = document.querySelector(".aside__contenedor")

seccionA.style.display = "block";


=======

//para que esto?

document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.querySelector(".Carrousel-items");
    const intervalo = 5000; // 60 segundos en milisegundos
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














>>>>>>> feb09c2fa6ce24302215678b4d99086f05a7495a
