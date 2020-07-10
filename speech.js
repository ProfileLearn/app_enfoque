var recognition;
let textoHablado;
	var recognizing = false;
	if (!('webkitSpeechRecognition' in window)) {
		alert("¡API no soportada!");
	} else {

		recognition = new webkitSpeechRecognition();
		recognition.lang = "es-VE";
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function() {
			recognizing = true;
			console.log("empezando a escuchar");
		}
		recognition.onresult = function(event) {

		 for (var i = event.resultIndex; i < event.results.length; i++) {
			if(event.results[i].isFinal){
				textoHablado = event.results[i][0].transcript;
				textoHablado = textoHablado.split(" ");
				console.log(textoHablado);
			}
		 }
			
			//texto
		}
		recognition.onerror = function(event) {
		}
		recognition.onend = function() {
			recognizing = false;
			// document.getElementById("procesar").innerHTML = "Escuchar";
			console.log("terminó de escuchar, llegó a su fin");

		}

	}

	function procesar() {

		if (recognizing == false) {
			recognition.start();
			recognizing = true;
			// document.getElementById("procesar").innerHTML = "Detener";
		} else {
			recognition.stop();
			recognizing = false;
			// document.getElementById("procesar").innerHTML = "Escuchar";
		}
	}