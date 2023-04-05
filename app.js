// function sayHello(name){
//     console.log(`Hello ${name}`);
// }

// setTimeout(sayHello("Marc"), 10000);

// console.log(window);

// let message = "Hi";

// console.log(global.message);

// console.log(module);
// console.log(logger);

//to load a module
// const logger = require('./logger.js');
// logger.log('message');

//get module logger.js
// const log = require('./logger.js');
// log('message');


const path = require('path');
let pathObj = path.parse(__filename);

console.log(pathObj);