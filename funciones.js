// document.write ("Hola bro ¿todo bien?")
//Si bro, todo bien
// me alegro bro

//para que esto?

const contenedor = document.querySelector(".Carrousel-items")

let intervalo = null;

const start = () => {
    intervalo = setInterval(function () {
        contenedor.scrollLeft = contenedor.scrollLeft + 10;
    }, 10);
};
const stop = () => {

}

start()
