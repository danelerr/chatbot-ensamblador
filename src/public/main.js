// Logica para interactuar con el frontend

const dominio = 'https://chatbot-ensamblador-production.up.railway.app/';

const contenedorMensajes = document.getElementById('respuestas');

async function chatear() {
  //otenemos el imput
  let cadena = document.getElementById("txtPregunta").value;
  document.getElementById("txtPregunta").value = "";
  //agregar el elemento
  ponerMensajeUsuario(cadena);
  //Consumiendo la api
  let respuesta = await obtenerRespuestaBot(cadena);
  //agregando el mensaje
  ponerMensajeBot(respuesta);
}

// Coloca el 'mensaje' en la interfaz
function ponerMensajeUsuario(mensaje) {
  let parrafo = document.createElement("p");
  let foto = document.createElement("span");

  foto.setAttribute('id', 'span-usuario');
  foto.setAttribute('class', "material-symbols-outlined");
  foto.innerHTML = 'face_3';

  parrafo.appendChild(foto);
  parrafo.innerHTML = parrafo.innerHTML + mensaje;
  parrafo.setAttribute('class', 'mensajes-usuario');

  contenedorMensajes.appendChild(parrafo);
}

async function obtenerRespuestaBot(mensaje) {
  mensaje = mensaje.toLowerCase();
  //creamos una url para pedirle cosas a la api
  let url = new URLSearchParams({ texto: mensaje });
  //consumimos la api
  url = dominio+"mensaje?" + url.toString();
  console.log(url);
  let respuesta = await fetch(url);
  respuesta = respuesta.json();
  alert('hola');
  
  await respuesta.then((r) => (respuesta = r.mensaje));

  return respuesta;
}

// Coloca el 'mensaje' en la interfaz
function ponerMensajeBot(mensaje) {
  let parrafo = document.createElement("p");
  let foto = document.createElement("span");

  foto.setAttribute('id', 'span-bot');
  foto.setAttribute('class', "material-symbols-outlined");
  foto.innerHTML = 'robot';

  parrafo.appendChild(foto);
  parrafo.innerHTML = parrafo.innerHTML + mensaje;
  parrafo.setAttribute('class', 'mensajes-bot');
  contenedorMensajes.appendChild(parrafo);
}


//para que al darle enter se envie el mensaje
document.getElementById('txtPregunta').addEventListener('keyup', (e) => {
  if (e.key == 'Enter') {
    chatear();
  }
});

