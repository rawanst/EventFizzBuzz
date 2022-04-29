const FizzBuzz = require('./emitter');

const fizz1 = new FizzBuzz();
fizz1.on("messageRecu", function(payload) {
	console.log("fizz 1: payload =>", payload)
})

const fizz2 = new FizzBuzz();
fizz2.on("messageRecu", function(payload){
	console.log("fizz 2: payload =>",payload)
})

const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("messageRecu", function(payload){
	console.log("emitter: payload =>", payload)
})

fizz1.log("message 1");
fizz1.log("message 2");
fizz1.log("message 3");
fizz1.log("message 4");

