const Colores = ["red", "green", "blue", "yellow", "black"];
const Palabras = ["ROJO", "VERDE", "AZUL", "AMARILLO", "NEGRO", "BLANCO"];
const PalabrasSalidas = [];
const snd = new Audio("./metronomo.mp3");
const milisegundos = 500;
let timer;
let inicio = false;
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

function sound() {
  snd.load();
  snd.play();
}

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
// const btns = document.querySelector(".btns");

function start() {
  const Celda = azar(Colores, Palabras);
  render(Celda);
  sound();
  puntaje(Celda.color);
}

startBtn.addEventListener("click", time);
stopBtn.addEventListener("click", stop);

// falta incluir array de texto hablado

function puntaje(obj) {
  PalabrasSalidas[count] =  obj;
  console.log(PalabrasSalidas[count]);
  count ++;
}

function conteoInicial(i) {
  document.querySelector("h1").textContent = i;
}

function time() {
  clearInterval(timer);
  if (inicio == false) {
    let i =3;
    timer = setInterval(()=>{   
    conteoInicial(i);
    i--;
      if (i<1) {
        clearInterval(timer);
        inicio = true;
      }
    }, milisegundos);
  }
  if (inicio == true) {
    procesar(); 
    timer = setInterval(start, milisegundos);}
}

function stop(){
  procesar();
  clearInterval(timer);
  inicio = false;
  PalabraH1.className = "";
}
