// ************** Default Params y Concatenación **************

function newFunction(name, age, country){
    var name = name || "oscar";
    var age = age || 28;
    var country = country || "MX";
    console.log(name,age,country);
}

// Establecerlo en la forma actual ES6

function newFunction2(name = "oscar",age = 28, country = "MX"){
    console.log(name,age,country);
};

newFunction2();
newFunction2("Ricardo",23,"CO");

// Template literals

let hello = "Hello";
let world = "World";

let epicPhras = hello + " " + world;
console.log(epicPhras);

let epicPhras2 = `${hello} ${world}`;
console.log(epicPhras2);

// ************** LET y CONST, Multilínea, Spread Operator y Desestructuración **************

let lorem = "Quiero separa esta linea de texto \n"
+ "Con la segunda linea de texto del editor"

// ES6

let lorem2 = `Otra frase epica que necesitamos
Esta es la segunda linea de la frase epica
`;

console.log(lorem);
console.log(lorem2);

// Desestructuración de elementos de objetos

let person = {
    'name' : 'oscar',
    'age' : 28,
    'country' : 'MX'
}

console.log(person.name,person.age,person.country);

// ES6

let {name,age,country} = person;

console.log(name,age,country)
console.log(age,country)

// Spread Operator ES6 (Operador de propagación)

let team1 = ["Oscar", "Francisco", "Gerardo", "Rebeca"];
let team2 = ["Valeria", "Jessica", "Camila"];

let education = ["David",...team1,...team2];

console.table(education)

// Arrow Functions, Promesas y Parámetros en objetos

let name = "Francisco";
let age = 28;

obj = {name : name, age : age};

// ES6

obj2 = {name, age}

console.log(obj)
console.log(obj2)

// Arrow function

const names = [
    {name: 'Francisco', age : 28,country : 'MX'},
    {name: 'Javier', age : 30,country : 'CN'}
]

let lisOfNames = names.map(function (item){
    console.log(item.name);
})

// ES6

let lisOfNames2 = names.map(item => console.log(item.name));

const lisOfNames3 = (name, age, country) => {
    //...
}

const lisOfNames4 = age => {} //{...};

const square = num => num*num;

// Promesa

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve("Hey!")
        }
        else{
            reject("Ups!")
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error))

// Clases, Módulos y Generadores
// -> Clases <-

class calculadora {
    constructor (){
        this.valorA = 0;
        this.valorB = 0;
    }
    sumar(valorA,valorB){
        this.valorA = valorA;
        this.valorB = valorB;
        return this.valorA + this.valorB;
    }
}

const calc = new calculadora();

console.log(calc.sumar(100,11));

// Modulos (Import, Export)    ---------------------------- causa error ...........

import {hello} from './module'

console.log(hello())

// Generadores (generators)

function* helloWorld(){
    if(true){
        yield "Hola";
    }
    if(true){
        yield "World";
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);