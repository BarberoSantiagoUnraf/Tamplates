/*
1 Ingresar dos valores y sumarlos.
2 Ingresar tres valores e indicar cual es el mayor y cual el menor.
3 Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
4 Ingresar un número e indicar si es par.
5 Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
6 Ingresar dos valores enteros y enumerar los elementos que los separan.
  Ejemplo 1: 2 y 6 --> 3 , 4, 5
  Ejemplo 2: 10 y 5 --> 9, 8, 7, 6 
7 Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
8 Mostrar los multiplos de 2 y 5 menores a 100.
9 Obtener la suma de los elementos de un array.
10 Sumar solo los elementos pares de un array.
11 Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
12 Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
   Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
13 Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.
*/

// 1 Ingresar dos valores y sumarlos.//
let a = 7;
let b = 5;
let suma= a + b;
console.log("1. Ingresar dos valores y sumarlos.");
console.log(a + " + " + b + " = " + suma);

// 2 Ingresar tres valores e indicar cual es el mayor y cual el menor.//

let array2 = [652, 24, 452];
let mayor2 = Math.max(...array2);
console.log("2. Ingresar tres valores e indicar cual es el mayor y cual el menor.");
console.log("De los numeros: " + array2 + " El mayor es: " + mayor2);

// 3 Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.//

let palabra = "Programacion1";
let longitud = palabra.length;
console.log("3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.");
console.log("la palabra: " + palabra + " tiene " + longitud + " letras.");

// 4 Ingresar un número e indicar si es par.//

let ParOImpar = 7;
if (ParOImpar % 2 == 0) {
    console.log("4. Ingresar un número e indicar si es par.");
    console.log("el numero: "+ParOImpar + " es par.");
}
else {
    console.log("4. Ingresar un número e indicar si es par.");
    console.log("el numero: "+ParOImpar + " es impar.");
  }

// 5 Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.//

let Repetir = "Uwu"; 
let n = 3;
let Repeticion = Repetir.concat("\n").repeat(n); // agrega una nueva linea y repite la palabra n veces
console.log("5. Ingresar una palabra y un numero \"n\". Repetir la palabra \"n\" veces.");
console.log("la palabra: " + Repetir + " se va a repetir " + n + " veces:\n" + Repeticion);

// 6 Ingresar dos valores enteros y enumerar los elementos que los separan.//

let inter1 = 8;
let inter2 = 3;
let Inicio6;
let Final6;
if (inter1 > inter2) {
    Menor6 = inter2;
    mayor6 = inter1;
    Inicio6 = inter2 + 1;
    Final6 = inter1 - 1;
  }    
else {
    Menor6 = inter1;
    mayor6 = inter2;
    Inicio6 = inter1 + 1;
    Final6 = inter2 - 1;
}
console.log("6. Ingresar dos valores enteros y enumerar los elementos que los separan.");
console.log("Los numeros que separan a " + Menor6 + " y " + mayor6 + " son:");

for (let i = Inicio6; i <= Final6; i++) {
  console.log(i);
}

// 7 Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.//
let Multiplo7_1 = 3;
let Multiplo7_2 = 30;
let multiploDE = 3;
let inicio7;
let final7;
if (Multiplo7_1 > Multiplo7_2) {
    inicio7 = Multiplo7_2;
    final7 = Multiplo7_1;
  }
else {
    inicio7 = Multiplo7_1;
    final7 = Multiplo7_2;
  }
console.log("7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.");
console.log("Los multiplos de 3 que hay entre " + inicio7 + " y " + final7 + " son: ");
for (let i = inicio7; i <= final7; i++) {
    if (i % multiploDE == 0) {
        console.log(i);
    }
}

// 8 Mostrar los multiplos de 2 y 5 menores a 100.//

console.log("8. Mostrar los multiplos de 2 y 5 menores a 100.");
console.log("Los multiplos de 2 y 5 menores a 100 son: ");

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0 && i % 5 == 0) {
        console.log(i);
    }
}

// 9 Obtener la suma de los elementos de un array.//
let array9 = [1, 4, 3, 4, 10];
let sumaArray9 = 0;
for (let i = 0; i < array9.length; i++) {
    sumaArray9 += array9[i];
}
console.log("9. Obtener la suma de los elementos de un array.");
console.log("El resultado de sumar los elementos del array es: " + sumaArray9);

// 10 Sumar solo los elementos pares de un array.//

let array10 = [1, 4, 3, 4, 10];
let sumaArray10 = 0;
for (let i = 0; i < array10.length; i++) {
    if (array10[i] % 2 == 0) {
        sumaArray10 += array10[i];
    }
}
console.log("La suma de los elementos pares del array es: " + sumaArray10);

// 11 Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal//
let palabra11 = "otorrinolaringologo"; // Palabra de ejemplo
let contador = {}; // Objeto literal para contar las letras
for (let i = 0; i < palabra11.length; i++) {
    let letra = palabra11[i];
    if (contador[letra]) {
        contador[letra]++; // Incrementa el contador si la letra ya existe
    } else {
        contador[letra] = 1; // Inicializa el contador si la letra no existe
    }
}
console.log("11. Ingresar una palabra e identificar la letras distintas y sus repeticiones.");
console.log("La palabra: " + palabra11 + " tiene las siguientes letras y repeticiones:");
for (let letra in contador) {
    console.log(letra + " = " + contador[letra]);
} 

// 12 Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.//
let personas = [
    { nombre: "Juan", sexo: "masculino", edad: 7 },
    { nombre: "Marina", sexo: "femenino", edad: 49 },
    { nombre: "Ruben", sexo: "masculino", edad: 52 },
    { nombre: "Ana", sexo: "femenino", edad: 24 },
    { nombre: "Ignacio", sexo: "masculino", edad: 27 },
    { nombre: "Santiago", sexo: "masculino", edad: 25 },
    { nombre: "Mili", sexo: "femenino", edad: 24 },
    { nombre: "Constanza", sexo: "femenino", edad: 16 },
    { nombre: "Malena", sexo: "femenino", edad: 13 },
    { nombre: "Daniela", sexo: "femenino", edad: 46 },
    { nombre: "Maria eugenia", sexo: "femenino", edad: 45 },
];
// who is the older women//


function Oldestwomen (){
  let Vieja = 0;
  let nombreVieja = "";
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].sexo === "femenino" && personas[i].edad > Vieja) {
        Vieja = personas[i].edad;
        nombreVieja = personas[i].nombre;
    }
  }
  return { Vieja, nombreVieja };
}

// who is the youngest men//


function youngestmen (){
  let pibe = Infinity;
  let Nombrepibe = "";
  for (let i = 0; i < personas.length; i++) {
     if (personas[i].sexo === "masculino" && personas[i].edad < pibe) {
      pibe = personas[i].edad;
      Nombrepibe = personas[i].nombre;    
      }
    }
    return { pibe, Nombrepibe };
}
// promedio edad mujeres//

function promedioedad() {
  let SumaEdades = 0;
  let contadorMujeres = 0;
  let PromedioMujeres = 0;
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].sexo === "femenino") {
        SumaEdades += personas[i].edad;
        contadorMujeres++;
    }
  }
  PromedioMujeres = SumaEdades / contadorMujeres;
  return PromedioMujeres;
}


console.log("12. Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.");
const { Vieja, nombreVieja } = Oldestwomen();
const { pibe, Nombrepibe } = youngestmen();
const promedioMujeres = promedioedad();

console.log("La mujer con mayor edad es: " + nombreVieja + " con " + Vieja + " años.");
console.log("El hombre con menor edad es: " + Nombrepibe + " con " + pibe + " años.");
console.log("El promedio de edad de las mujeres es: " + promedioMujeres);
