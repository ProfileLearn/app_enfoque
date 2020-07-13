
function azar(colores, palabras) {
  const color = Math.floor(Math.random() * 5);
  const palabra = Math.floor(Math.random() * 11);
  return { palabra: palabras[palabra], color: colores[color] };
}

function render(obj) {
  PalabraH1.className = "";
  PalabraH1.classList.add(obj.color);
  PalabraH1.textContent = obj.palabra;
}

function sound() {
  snd.load();
  snd.play();
}

function start() {
  PalabraH1.className = "";
  const Celda = azar(Colores, Palabras);
  render(Celda);
  sound();
  puntaje(Celda.color);
  if ([30,60,90,120,150,180,210,240].includes(count)) {
  	contadorInicial(4);
  }
}

function puntaje(obj) {
  PalabrasSalidas[count] =  obj;
  console.log(PalabrasSalidas[count]);
  count ++;
}

function time() {
   // procesar(); 
  timer = setInterval(start, milisegundos);
}

function stop(){
  // procesar();
  clearInterval(timer);
  inicio = false;
  count = 0;
  PalabraH1.className = "";
  PalabraH1.textContent = "--";
}

function contadorInicial(i) {
	clearInterval(timer);
  timer = setTimeout(function() {
    PalabraH1.textContent = i;
    PalabraH1.className = "";
    i--;
    if(i>0) {contadorInicial(i);}
    else {
      inicio = true;
      time(); 
    }  
  }, milisegundos);
}