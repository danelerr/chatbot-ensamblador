import { respuestas } from "./respuestas.js";

export function getRespuesta(mensaje) {
  const splitMensaje = mensaje.toLowerCase().split(/[\s¿?,!@$#%&*]+/);
  let respuesta;
  if (evaluarConvertidor(splitMensaje)) {
    respuesta = convertirAPuntoFlotante();
  } else {
    respuesta = evaluarRespuestas(splitMensaje);
  }
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



//para responder con un punto flotante;
let formato = '';
let numero = '';
function evaluarConvertidor(mensaje) {
  for (const palabra of mensaje) {
    if (palabra == '32' || palabra == '64') {
      formato = palabra;
    }
    if (palabra.match(/[+-]{1}[01]+\.[01]+$/g)) {
      numero = palabra;
    };
  }
  return formato != '' && numero != '';
}


function binToInt(num) {
  return parseInt(num, 2);
}

function intToBin(num) {
  return parseInt(num.toString(2));
}

function convertirAPuntoFlotante() {
  let exp = 8;
  let mantisa = 23;
  let resultado;
  if (formato == '64') {
    exp = 11;
    mantisa = 52; 
  }
  if (numero[0] == '-') {
    resultado = '1';
  } else {
    resultado = '0';
  }
  numero = numero.substring(1, numero.length);
  let index1 = numero.indexOf('1');
  let indexP = numero.indexOf('.');

  exp = (Math.pow(2, exp-1) - 1) + (indexP - (index1+1));
  resultado += intToBin(exp).toString();
  if (indexP < index1) {
    resultado += numero.substring(index1+1, numero.length).padEnd(mantisa, '0');
  } else {
    resultado += numero.substring(index1+1, indexP);
    resultado += numero.substring(indexP+1, numero.length).padEnd(mantisa, '0');
  }
  numero = '';
  formato = '';
  return resultado;
}