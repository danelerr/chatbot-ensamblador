//para que al darle enter se envie el mensaje
document.getElementById("txtPregunta").addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    chatear();
  }
});

//para los botones de la interfaz
const popUp = document.getElementById("modal");
const popUpTexto = document.getElementById("texto-modal");
document.getElementById("btn-acerca").addEventListener("click", () => {
  popUpTexto.innerHTML = `
    <strong style="font-size: 22px">max <span style="color: #FA7559; font-size: 22px">bot</span>;</strong> <br>
    Es una aplicación tipo chatbot creado para la feria de investigación 02/2022 de la FICCT
    <br><br>
    Para la materia <strong>programación ensamblador <span style="color: #FA7559">INF221-SX</span></strong> con el ingeniero Valentín Flores
    <br><br>
    Responde preguntas sobre la materia, interactuando a través de la interfaz de chat`;
  popUp.showModal();
});
document.getElementById("btn-desarrolladores").addEventListener("click", () => {
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
document.getElementById("btn-contacto").addEventListener("click", () => {
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

document.getElementById("cerrar-modal").addEventListener("click", () => {
  popUp.close();
});

//DARK MODE
const btnDark = document.getElementById('btn-dark');


const body = document.body;
const nav = document.getElementsByClassName('nav')[0];
const spanNav = document.getElementsByClassName('span-nav')[0];
const navItem = document.getElementsByClassName('nav-item');
const container = document.getElementsByClassName('container')[0];
const chatArea = document.getElementsByClassName('chat-area')[0];
const textBox = document.getElementById('txtPregunta');

btnDark.addEventListener('click', e => {
    body.classList.toggle('dark-mode');
    nav.classList.toggle('nav-dark');
    spanNav.classList.toggle('span-nav-dark');
    for (let item of navItem) {
        item.classList.toggle('nav-item-dark');
    }
    container.classList.toggle('container-dark');
    chatArea.classList.toggle('chat-area-dark');
    textBox.classList.toggle('txtPregunta-dark');
});



//     guardarDark(body.classList.contains('dark-mode'));
//     guardarDark(nav.classList.contains('nav-dark'));
//     guardarDark(spanNav.classList.contains('spanNav'));
//     guardarDark(body.classList.contains('span-nav-dark'));
//     for (let item of navItem) {
//         guardarDark(item.classList.contains('nav-item-dark'));
//     }
//     guardarDark(container.classList.contains('container-dark'));
//     guardarDark(chatArea.classList.contains('chat-area-dark'));
//     guardarDark(textBox.classList.contains('txtPregunta-dark'));
// });


// function cargarDark() {
//     const darkMode = localStorage.getItem('dark-mode');
//     if (!darkMode) {
//         guardarDark('false');
//     } else if (darkMode == 'true') {
//         body.classList.add('dark-mode');
//     }
// }


// function guardarDark(value) {
//     localStorage.setItem('dark-mode', value);
//     localStorage.setItem('nav-dark', value);
//     localStorage.setItem('span-nav-dark', value);
//     localStorage.setItem('nav-item-dark', value);
//     localStorage.setItem('container-dark', value);
//     localStorage.setItem('chat-area-dark', value);
//     localStorage.setItem('txtPregunta-dark', value);
// }



// window.addEventListener('load', () => {
//     cargarDark();
// })



//rgb(32, 32, 34);
