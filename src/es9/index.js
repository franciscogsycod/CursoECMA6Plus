// Operador de reposo que aun no se ha construido

const obj = {
    name : "Francisco",
    age : 28,
    country : "MX"
}

let {name,...all} = obj;
console.log(name,all)

// Unir elementos de objetos a un nuevo objeto

const obj0 = {
    name : "Francisco",
    age : 28
}

const obj1 = {
    ...obj0,
    country : "MX"
}

console.log(obj1)

// Promise.finaly

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"),3000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizó"))

// Agrupar bloques de rejects

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2020-04-26")
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year,month,day)