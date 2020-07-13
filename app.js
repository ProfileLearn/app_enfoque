const Colores = ["red", "green", "blue", "yellow", "black"];
const Palabras = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO", "LIBRE", "SUELTO", "AQUI", "AHORA", "SOY"];
const PalabrasSalidas = [];
const snd = new Audio("./metronomo.mp3");
let milisegundos = 600;

let timer;
let inicio = false;
let count = 0;

const PalabraH1 = document.querySelector("h1");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

startBtn.addEventListener("click", (e)=> {
  stop();
  contadorInicial(3);
});

stopBtn.addEventListener("click", stop);

