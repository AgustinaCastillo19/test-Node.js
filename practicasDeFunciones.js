/***Ejercicio n° 1:**
 * /*
* Crear una función **mapear** que acepte un **array** y un **callback**, y que:
     - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
  - obtenga un resultado.
 - lo agregue a un **nuevo** array.
 - devuelva el array final con el resultado de cada una de las llamadas al callback.

Ejemplo:
```javascript
const numeros = [1, 2, 3];
const duplicar = x => x * 2;
mapear(numeros, duplicar); // [2, 4, 6];
```*/
console.log('sin MAP:');
let otrosNum = [11, 8, 7, 6, 1];
let duplicar = x => x *2;

function mapear(numero, operaciones) {
    let resultado = [];
for (let i = 0; i < numero.length; i++) {
     cadaUno = numero[i];
    resultado.push(operaciones(cadaUno))}
    return  resultado
}

    console.log(mapear(otrosNum, duplicar));


    console.log('con MAP:');

   // let numeros = [12, 8 , 1, 4, 9];
let operacion = otrosNum.map((num) => num *2);

console.log(operacion);


/***Ejercicio n° 2:**
* Crear una función **filtrar** que acepte un **array** y un **callback**, y que:
     - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
  - si dicho callback devuelve **true**, agrega el elemento a un nuevo array.
 - devuelva el array final con los elementos que pasaron el filtro.

Ejemplo:
```javascript
const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = x => x % 10 === 0;
filtrar(numeros, multiploDe10); // [10, 40, 50];
```*/

let arrayNum = [48, 65, 98, 110, 100];
let pares = z => z % 2 == 0;

function filtrar(numeros, divisor) {
    let result = [];
    for (let i = 0; i <= numeros.length; i++) {
        if(divisor(numeros[i])){ 
            result.push(numeros[i])
        }
} return result
}

console.log('SIN FILTER');

console.log(filtrar(arrayNum,pares));





console.log('con FILTER');

let conFilter = arrayNum.filter(x => x % 2 === 0);

console.log(conFilter);

/***Ejercicio n° 3:**
* Crear una función **encontrar** que acepte un **array** y un **callback**, y que:
     - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento.
  - obtenga un resultado.
 - devuelva el elemento pasado como argumento del primer callback que devuelva **true**.
  - si ningun callback devuelve **true**, debe devolver undefined.

Ejemplo:
```javascript
const numeros = [8, 2, 3, 40, 33, 50];
const multiploDe5 = x => x % 5 === 0;
encontrar(numeros, multiploDe5); // 40
```*/
console.log('SIN FILTER');
let numbers = [12,45,60,35,82,77];
let multiploDe5 = X => X % 5 === 0;

function encontrar(array, callback) {
    let losEncontre = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            losEncontre.push(array[i])
        }
        
    }
    return losEncontre
    
}

console.log(encontrar(numbers,multiploDe5));


console.log('CON filter');

let probando = numbers.filter(x => x % 5 == 0);

console.log(probando);