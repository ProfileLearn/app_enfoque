const Colores = ["red", "green", "blue", "yellow", "black"];
const Palabras = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO"];
const PalabrasSalidas = [];
const snd = new Audio("./metronomo.mp3");
const milisegundos = 1000;
let timer;
let count = 0;

function azar(colores, palabras) {
  const color = Math.floor(Math.random() * 5);
  const palabra = Math.floor(Math.random() * 6);
  return { palabra: palabras[palabra], color: colores[color] };
}

function render(obj) {
  const PalabraH1 = document.querySelector("h1");
  PalabraH1.textContent = obj.palabra;
  PalabraH1.className = "";
  PalabraH1.classList.add(obj.color);
}

function start() {
  const Celda = azar(Colores, Palabras);
  render(Celda);
  snd.play();
  puntaje(Celda.color);
}

function conteoInicial(){

}

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const btns = document.querySelector(".btns");

btns.addEventListener("click", e => time(e));

function puntaje(obj) {
  PalabrasSalidas[count] = obj;
  console.log(PalabrasSalidas[count]);
  count ++;
}

function time(e) {
  procesar()
  clearInterval(timer);
  if (e.target == startBtn) {
    timer = setInterval(start, milisegundos);
  }
}