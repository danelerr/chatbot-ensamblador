import { respuestas } from "./respuestas.js";

export function getRespuesta(mensaje) {
  const splitMensaje = mensaje.toLowerCase().split(/[\s¿?,!@$#%&*]+/);
  const respuesta = evaluarRespuestas(splitMensaje);
  return respuesta;
}


function probabilidadDeMensajes(mensaje, palabrasConocidas, palabrasRequeridas = []) {
  let certezaDeMensaje = 0;
  let cumplepalabrasRequeridas = true;

  for (const palabra of mensaje) {
    if (palabrasConocidas.includes(palabra)) {
      certezaDeMensaje += 1;
    }
  }
  const probabilidad = certezaDeMensaje / palabrasConocidas.length;

  for (const palabra of palabrasRequeridas) {
    if (!mensaje.includes(palabra)) {
      cumplepalabrasRequeridas = false;
      break;
    }
  }
  if (cumplepalabrasRequeridas) {
    return Math.round(probabilidad * 100);
  } else {
    return 0;
  }
}

function evaluarRespuestas(mensaje) {
  const mayorProbabilidad = {};

  /**
   * 
   * @param {*} respuestaBot el mensaje que va a responder el bot
   * @param {*} palabrasConocidas lista de palabras que pueden ser conocidas para dar un mensaje
   * @param {*} requiredpalabras palabras obligatorias (argumento opcional)
   */
  function crearRespuesta(respuestaBot, palabrasConocidas, requiredpalabras = []) {
    mayorProbabilidad[respuestaBot] = probabilidadDeMensajes(mensaje, palabrasConocidas, requiredpalabras);
  }

  for (const respuesta of respuestas) {
    crearRespuesta(respuesta.respuesta, respuesta.palabrasConocidas, respuesta.palabrasRequeridas);
  }


  const mejorRespuesta = Object.keys(mayorProbabilidad).reduce((a, b) => mayorProbabilidad[a] > mayorProbabilidad[b] ? a : b);
  if (mayorProbabilidad[mejorRespuesta] < 1) {
    return sinRespuesta();
  } else {
    return mejorRespuesta;
  }
}

function sinRespuesta() {
  const crearRespuesta = ['puedes decirlo de nuevo?', 'No estoy seguro de lo quieres', 'búscalo en google a ver que tal'][Math.floor(Math.random() * 3)];
  return crearRespuesta;
}
