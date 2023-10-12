/*Ejericico 1:
Queremos calcular el area y el perimetro de un rectangulo para esto debemos de hacer dos funciones:
la primera debe calcular el area de un rectangulo por lo cual recibe dos parametros alto y ancho
Esta misma, debe de devolver el valor resultante del calculo!
La segunda debe calcular el perimetro del rectangulo, esta segunda funcion tambien recibe el ancho y alto como parametros.
De igual manera, debe de devolver el valor resultante del calculo.
La idea es que ambas funciones devuelvan el valor calculado y lo puedan imprimir despues con un console.log()*/

/*El Perímetro de un rectángulo es igual a la suma de todos sus lados.
ÁREA = BASE X ALTURA*/

console.log('EJERCICIO 1');

function calculoDeArea(alto, ancho) {
    let area =  alto * ancho;
    return 'El area del rectangulo es: ' +area 
}

function calculoDePerimetro(ancho, alto) {
    let suma1 = ancho *2;
    let suma2 = alto *2;
    let perimetro = suma1 + suma2;

    return 'El perímetro del rectangulo es ' +perimetro
    
}

console.log(calculoDeArea(12,18));
console.log(calculoDePerimetro(18,12));


/*Ejercicio 2:
Hablemos de saludar, uno puede pensar en saludos como hola, chau o muchas opciones más... es decir puede ser tanto como para recibir a 
una persona como para despedirla, 
entonces podríamos crear 3 funciones;
la primer funcion "saludar" que reciba 3 parametros, los 2 primeros serian el nombre y el apellido de una persona, el ultimo parametro es un 
callback!
La segunda funcion "despedir" debe de recibir el nombre y apellido de una persona como parametro y devolver el saludo, por ejemplo: "Chau 
Ignacio Palmier"
Y la ultima funcion "recibir" también debe de recibir el nombre y apellido de una persona como parametro y devolver el saludo, por ejemplo:
 "Hola Gabriel Dominguez"*/

 console.log( ' ' )

 console.log('EJERCICIO 2');


 function saludar(nombre, apellido, callback){
   return (callback(nombre, apellido)); 
 }

 function despedir(nombre, apellido) {
    return 'Chau ' +nombre+ ' ' +apellido+ '.'
    
}

function recibir(nombre, apellido) {
    return '¡Hola ' +nombre+ ' ' +apellido+ '!'
    
}

function aLaTarde(nombre, apellido){
    return '¡Buenas tardes ' +nombre+ ' ' +apellido+ '!'
    
}

console.log(saludar('Agustina', 'Castillo', despedir));
console.log(saludar('Agustina', 'Castillo', recibir));
console.log(saludar('Agustina', 'Castillo', aLaTarde))