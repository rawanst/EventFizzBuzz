const logger = require('./emitter');

const logger1 = new FizzBuzz();
logger1.on('messageRecu', function(payload) {
	        console.log('logger 1: payload =>', payload)
})

const logger2 = new FizzBuzz();
logger2.on('messageRecu', function(payload){
	        console.log('logger 2: payload =>',payload)
})

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageRecu', function(payload){
	        console.log('emitter: payload =>', payload)
})

logger1.log('message 1');
logger1.log('message 2');
logger1.log('message 3');
logger1.log('message 4');

