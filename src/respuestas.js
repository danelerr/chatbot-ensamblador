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
  },
  {
    respuesta: "Para que pueda convertir de binario a punto flotante, asegurate de haber escrito bien el número y haber especificado si lo quieres de 64 o 32 bits. <br><br> un numero bien escrito, lleva un signo + o un signo - luego de unos y ceros hasta un punto, y luego otros unos y ceros. <br><br> este es un número bien escrito -10101000.11110011001100110011",
    palabrasConocidas: ["convierte", "convertir", "punto", "flotante", "64", "32"],
    palabrasRequeridas: [],
  },
  {
    respuesta: `Para sumar en ensamblador, se usa el memónico add
    
<pre class="span-code">
add op1, op2
</pre>
    Luego de eso, se ejecuta op1 + op2 y este resultado se guarda a op1

    Puedes verlo como una instrucción c++: op1 = op1 + op2;

    O también interpretarlo como que, "suma a op1 el valor de op2
    
    <br>
    <br>

    op1 puede ser, un registro, o un valor en memoria
    op2 puede ser, un registro, un valor en memoria o un inmediato

    Siempre que vayas a sumar, recuerda que el tamaño del registro es el que manda. En el caso de que op1 sea un registro no tendrás muchos problemas, de igual forma si op2 es un registro, pero si op1 es un valor en memoria y op2 inmediato o un valor en memoria, tendrás que especificar el tamaño de la suma

    Ej:
    Si op1 y op2 son valores en memoria
    <pre class="span-code">
    add byte[op1], byte[op2]
    add word[op1], word[op2]
    add dword[op1], dword[op2]
    add qword[op1], qword[op2]
    </pre>
    Podrás saltarte esta regla, siempre y cuando sepas lo que estás haciendo 

    Si op1 es valor en memoria
    <pre class="span-code">
    add byte[op1], 2
    add word[op1], 2
    add dword[op1], 2
    add qword[op1], 2
    </pre>

    Como ves en todos especificamos el tamaño, a no ser que hayan algún registro, si lo hay entonces ya no es necesartio porque se tomará su tamaño
    `,
    palabrasConocidas: ["sumar", "suma", "add", "como", "cómo"],
    palabrasRequeridas: [],
  },

  {
    respuesta: `Para restar en ensamblador, se usa el memónico sub
    
<pre class="span-code">
sub op1, op2
</pre>
    Luego de eso, se ejecuta op1 - op2 y este resultado se guarda a op1

    Puedes verlo como una instrucción c++: op1 = op1 - op2;

    O también interpretarlo como que, "restale a op1 el valor de op2
    
    <br>
    <br>

    op1 puede ser, un registro, o un valor en memoria
    op2 puede ser, un registro, un valor en memoria o un inmediato

    Siempre que vayas a restar, recuerda que el tamaño del registro es el que manda. En el caso de que op1 sea un registro no tendrás muchos problemas, de igual forma si op2 es un registro, pero si op1 es un valor en memoria y op2 inmediato o un valor en memoria, tendrás que especificar el tamaño de la resta

    Ej:
    Si op1 y op2 son valores en memoria
    <pre class="span-code">
    sub byte[op1], byte[op2]
    sub word[op1], word[op2]
    sub dword[op1], dword[op2]
    sub qword[op1], qword[op2]
    </pre>
    Podrás saltarte esta regla, siempre y cuando sepas lo que estás haciendo 

    Si op1 es valor en memoria
    <pre class="span-code">
    sub byte[op1], 2
    sub word[op1], 2
    sub dword[op1], 2
    sub qword[op1], 2
    </pre>

    Como ves en todos especificamos el tamaño, a no ser que hayan algún registro, si lo hay entonces ya no es necesartio porque se tomará su tamaño
    `,
    palabrasConocidas: ["restar", "resta", "sub", "como", "cómo"],
    palabrasRequeridas: [],
  },
  {
    respuesta: `Para multiplicar en ensamblador, se usan los memónicos mul, imul
    
    la forma más sencilla de hacerlo es con imul, puesto que tiene un modo de uso muy similar a add o sub

<pre class="span-code">
imul op1, op2 
</pre>
    Luego de eso, se ejecuta op1 * op2 y este resultado se guarda a op1

    Puedes verlo como una instrucción c++: op1 = op1 * op2;

    O también interpretarlo como que, "multiplica a op1 por el valor de op2
    
    Esta forma de multiplicar tiene problemas con registros de byte. Es muy probable pasarse el límite de registro y causar un overflow, es recomendable usarla con 16, 32, y 64 bits
    <br>
    <br>

    Esta no es la única forma de usar imul, en realidad tiene 2 maneras más de usarlo
    
    <pre class="span-code">
    imul op1, op2, op3 
    </pre>

    Guarda el resultado de op2 * op3 en op1

    Volviendo a la lógica de instrucciones c++, sería: op1 = op2 * op3;.


    La otra manera de utilizarlo es de la misma forma que usar mul

    Para ver como usar mul puedes preguntarme especificamente por este memónico.

    `,
    palabrasConocidas: ["multiplicar", "multiplicación", "imul", "cómo", "como"],
    palabrasRequeridas: [],
  }, 
  {
    respuesta: `Las banderas son unos valores que se guardan en un registro flags, y nos ayudan a conocer el estado del procesador respecto a la ejecución actual de un programa
    
    Todas las banderas son valores entre 0 y 1, apagado o encendido

Entre algunas banderas tenemos:
CF: Carry Flag, se activa si hay acarreo, es decir en la suma a veces "llevamos un dígito" y ese dígito se guarda en el CarryFlag<br>
SF: Signed Flag, Si un resultado es negativo, se activa y se pone en 1, caso contrario en 0<br>
ZF: Zero Flag, Si un resultado es 0, se pone 1, caso contrario se mantiene en 0<br>
OF: OverFlow Es cuando nos pasamos del límite de un registro espacio de memoria, por decir a un registro de 8bits le queremos meter un valor más grande del que puede almacenar, por ejemplo 300 y ahí se activa la Overfow.
    `,
    palabrasConocidas: ["banderas", "flag", "como", "que"],
    palabrasRequeridas: [],
  },
  {
    respuesta: `mov es una inscrucción que sirve para guardar un valor dentro de otro
Se usa de la siguiente forma:
<pre class="span-code">
mov op1, op2
</pre>
    Luego de eso, se ejecuta op1 = op2

    Puedes verlo como una instrucción c++: op1 = op2;

    O también interpretarlo como que, "muevr a op1 el valor de op2
`,
    palabrasConocidas: ["mov", "igual", "ensamblador", "como", "mover"],
    palabrasRequeridas: [],
  }
];
    
