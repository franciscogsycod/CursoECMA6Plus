// Objetc.entries

// Arreglo de arreglos de objetos

const data = {
    frontend : "Oscar",
    backend : "Isabel",
    designer : "Ana"
}

const entries = Object.entries(data)

console.log(entries)

console.log(entries.length)

// Object values

const data = {
    frontend : "Oscar",
    backend : "Isabel",
    designer : "Ana",
}

const values = Object.values(data)

console.log(values)

console.log(values.length)

// Padding

const string = "Hello";

console.log(string.padStart(7,"hi"))
console.log(string.padEnd(7,"-"))

// Async y Await

//->Promesa<-
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"),3000)
            : reject(new Error("Error"))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync();

const otherFunction = async() => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error)
    }
};

otherFunction();