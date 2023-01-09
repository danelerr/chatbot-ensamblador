// Logica para interactuar con el frontend

const dominio = 'http://192.168.0.3:3000/';
//'http://localhost:3000/';

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
  const url = new URLSearchParams({ texto: mensaje });

  //consumimos la api
  let respuesta = await fetch(dominio+"mensaje?" + url.toString());

  respuesta = respuesta.json();

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

