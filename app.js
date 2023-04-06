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

//Tried to import path, and tried path.parse
// const path = require('path');
// let pathObj = path.parse(__filename);
// console.log(pathObj);


//Tried to import OS
// const os = require('os');
// let freeMem = os.freemem();
// console.log(`Free Memory: ${freeMem}`);
// let totalMem = os.totalmem();
// console.log(`Total Memory: ${totalMem}`);
// let loadAvg = os.loadavg();
// console.log(loadAvg);

//Tried to import File System
//Sync
const fS = require('fs');
// const files = fS.readdirSync('./');
// console.table(files);
//Async
fS.readdir('$', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});