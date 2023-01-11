// Logica para interactuar con el frontend

// const dominio = 'https://chatbot-ensamblador-production.up.railway.app/';
const dominio = 'http://192.168.0.2:3000/'

const contenedorMensajes = document.getElementById('respuestas');



async function chatear() {
  //otenemos el imput
  let cadena = document.getElementById("txtPregunta").value;
  //borra el texto
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
  let respuesta = await fetch(url);
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

//para los botones de la interfaz
const popUp = document.getElementById('modal');
const popUpTexto = document.getElementById('texto-modal');
document.getElementById('btn-acerca').addEventListener('click', () => {
  popUpTexto.innerHTML = `
  <strong style="font-size: 22px">max <span style="color: #FA7559; font-size: 22px">bot</span>;</strong> <br>
  Es una aplicación tipo chatbot creado para la feria de investigación 02/2022 de la FICCT
  <br><br>
  Para la materia <strong>programación ensamblador <span style="color: #FA7559">INF221-SX</span></strong> con el ingeniero Valentín Flores
  <br><br>
  Responde preguntas sobre la materia, interactuando a través de la interfaz de chat`;
  popUp.showModal();
}); 
document.getElementById('btn-desarrolladores').addEventListener('click', () => {
  popUpTexto.innerHTML = `
  <strong style="font-size: 22px">Desarrolladores <span style="color: #FA7559; font-size: 22px">:</span></strong> <br>
  <span style="color: #FA7559;"> * </span> Desired Denise Aldaba Fernandez <br><br>
  <span style="color: #FA7559;"> * </span> Jose Mauricio Castro Fernandez <br><br>
  <span style="color: #FA7559;"> * </span> Carol Eugenia Mendez Gallo <br><br>
  <span style="color: #FA7559;"> * </span> Javier Rodrigo Yabeta Ribero <br><br>
  <span style="color: #FA7559;"> * </span> Yaroslav Edwin Astete Paz <br><br>

   `; 
  popUp.showModal();
}); 
document.getElementById('btn-contacto').addEventListener('click', () => {
  popUpTexto.innerHTML = `
  <strong> <span style="color: #FA7559; font-size: 22px">Contacto:</span></strong> <br>
  <strong> Desired: <a href="https://wa.me/59177815860" style="color: blue"> +591 77815860 </a> </strong><br><br>
  <strong> Mauricio: <a href="https://wa.me/59175091614" style="color: blue"> +591 75091614 </a></strong> <br><br>
  <strong> Carol: <a href="https://wa.me/59171170878" style="color: blue"> +591 71170878 </a></strong> <br><br>
  <strong> Rodrigo: <a href="https://wa.me/59178140329" style="color: blue"> +591 78140329 </a></strong> <br><br>
  <strong> Yaroslav: <a href="https://wa.me/59176033318" style="color: blue"> +591 76033318 </a></strong> <br><br>

   `; 
  popUp.showModal();
}); 

document.getElementById('cerrar-modal').addEventListener('click', () => {
  popUp.close();
});


