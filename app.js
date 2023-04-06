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
// const fS = require('fs');
// const files = fS.readdirSync('./');
// console.table(files);
//Async
// fS.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });


// //Tried to import Events
// //first char capital is a Class
// //container for related methods and properties
// const EventEmitter = require('events');
// // const { emit } = require('process');
// //Object
// // const emitter = new EventEmitter();

// const Logger = require('./logger');
// const logger = new Logger();

// //register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// logger.log('message');
// //ACTIVITY Raise: logging (data: message)
// // emitter.on('logging', (arg) =>{
// //     console.log('Listener called', arg);
// // });
// // emitter.emit('logging', {data: message});

const http = require('http');
const server = http.createServer();
server.on('connection', (socket)=>{
    console.log('New connection...');
});
server.listen(3000);

console.log('Listening on port 3000...');
