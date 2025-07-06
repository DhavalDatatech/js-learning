//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

// console.log(typeof score);  // number
// console.log(typeof scoreValue); // number

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// console.log(typeof isLoggedIn); // boolean
// console.log(typeof outsideTemp); // object

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(typeof id); // symbol
// console.log(typeof anotherId); // symbol
// console.log(id === anotherId); // false

const bigNumber = 3456543576654356754n

// console.log(typeof bigNumber); // bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// console.log(typeof heros); // object

let myObj = {
    name: "dhaval",
    age: 22,
}

// console.log(myObj['name']); // it will print name => dhaval
// console.log(typeof myObj); // object

 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3