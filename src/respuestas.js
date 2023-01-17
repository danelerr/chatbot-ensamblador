export const respuestas = [
  {
    respuesta: "hola",
    palabrasConocidas: ["hola", "klk", "saludos", "buenas"],
    palabrasRequeridas: [],
  },
  {
    respuesta: "La dirección del segment .bss es 0x407030",
    palabrasConocidas: ["direccion", "segment", "bss", "buenas"],
    palabrasRequeridas: ["bss"],
  },
  {
    respuesta: "La dirección del segment .data es 0x403010",
    palabrasConocidas: ["direccion", "segment", "data"],
    palabrasRequeridas: ["data"],
  },
  {
    respuesta: "La dirección del segment .text es 0x401550",
    palabrasConocidas: ["direccion", "segment", "text"],
    palabrasRequeridas: ["text"],
  },
  {
    respuesta: `El complemento a 2 es la forma de representar número negativos, en binario
    
    Consiste en intercambiar los dígitos (complemento a 1) y a ese resultado sumarle 1`,
    palabrasConocidas: ['complemento', 'dos', '2'],
    palabrasRequeridas: ['complemento'],
  },
  {
    respuesta: `El complemento a 1 consiste en en intercambiar los ceros por unos, y los unos por ceros
    Ej:
    <pre class="span-code">
01010101010000 
en complemento a 1:
10101010101111
    </pre>`,
    palabrasConocidas: ['complemento', 'uno', '1'],
    palabrasRequeridas: ['complemento'],
  },
  {
    respuesta: `Para compilar, primero abre el cmd o terminal justo dónde está tu archivo.asm

Luego, con el cmd, ejecuta los siguientes comandos 
<pre class="span-code">
  nasm -f win64 -o P1.o P1.asm -l P1.lst
</pre>
Dónde P1, será el nombre de tu archivo.asm

Seguidamente:
<pre class="span-code">
gcc -o P1 P1.o
</pre>

Y para finalizar, si todo salió bien, puedes ejecutar tu programa simplemente con el nombre de tu archivo
<pre class="span-code">
P1
</pre>
`,
    palabrasConocidas: ['como', 'compilar', 'ensamblar', 'ejecutar', 'hacer', 'correr', 'cómo', 'ensamblador'], 
    palabrasRequeridas: []
  }
];
    

// function getPuntoFlotante() {
//   let signo = 0;
//   let exponente = 1023; //11 bits
//   let mantisa = 1023; //52 bits
//   return expMensaje[0];

// }

// {
//     respuesta: "",
//     palabrasConocidas: [], 
//     palabrasRequeridas: []
//   }
