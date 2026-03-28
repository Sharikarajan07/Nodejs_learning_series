// const handleget = async () => {
//     let res = await fetch("https://fakestoreapi.com/products");
//     let data = await res.json();
//     console.log(data);
// }
// handleget();

//require('./rio')


//commonjs 
//let {a,add} = require('./rio')

//es6
// import {a,add} from "./rio.js"


// console.log(a);

// add(2,4)
// add(5,5)

//setTimeout
// console.log(1);
// setTimeout (() =>{
//     console.log(2);
// },1000)
// console.log(3);

//calculate
// let{add,mul,sub,div} = require("./calculate.js")

// add(5,5)
// sub(10,5)
// mul(4,4)
// div(20,10)

//setImmediate
console.log("hello");
setImmediate(() => {
    console.log("setImmediate");
})
setTimeout(() => {
    console.log("setTimeout");
}, 0)
console.log("end");

//filesystem
const fs = require('fs');
fs.readFile("demo.txt", () => {
    console.log("fileeeeeee");
    setTimeout(() => {
        console.log("Timeout(timer phase)");
    }, 0);
    setImmediate(() => {
        console.log("Immediate(check phase)");
    });
});

//process.nextTick and promise
Promise.resolve(() =>
    console.log("promise")).then((da) =>
        console.log("Promise resolved"));
process.nextTick(() => {
    console.log("process.next");
});

//how to create server
const http = require("http")
const server = http.createServer((req, res) => {
    res.send("hii iam server")
})
server.listen(3000)



