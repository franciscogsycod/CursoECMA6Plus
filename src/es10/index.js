// Matrices aplanadas

let arreglo = [1,2,3, [1,2,3, [1,2,3]]];
console.log(arreglo.length)
console.log(arreglo.flat(arreglo.length-2));

// flatMap

let arreglo1 = [2,3,4,5]
console.log(arreglo1.flatMap(value => [value,value*2]))

// trimStart 

let hello = "       Hello World"

console.log(hello)
console.log(hello.trimStart())

// trimEnd

let hello = "Hello World         "

console.log(hello)
console.log(hello.trimEnd())

// From entries

let entries = [["name","francisco"], ["age", 32]]

nvoObjeto = Object.fromEntries(entries)

console.log(nvoObjeto)

// Objeto de tipo simbolo para acceder a descripción

let mySymbol = "MySymbolo";
let symbol = Symbol(mySymbol);

console.log(symbol.description)