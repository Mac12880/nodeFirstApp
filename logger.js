const EventEmitter = require('events');

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
    //when a function inside the class it is a method
    log(message){
        //send an HTTP request
        console.log(message);
    
        //raise an event
        //making a noise or do something
        this.emit('messageLogged', { id: 1, url:'http://'});
    }
}

//export an object
// module.exports.log = log;


//export only a function
module.exports = Logger;

// module.exports.endpoint = url; 