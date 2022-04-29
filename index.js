const FizzBuzz = require('./emitter');

const fizz1 = new FizzBuzz();
fizz1.on("messageRecu", function(payload) {
	if( payload % 5 == 0 && payload % 3 == 0 ){
		console.log('FizzBuzz');
	}
	else if ( payload %  5 == 0){
		console.log('Buzz');
	}
	else if (payload % 3 == 0){
		console.log('Fizz');
	}
	else {
		console.log(payload)
	}
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

fizz1.log(25);
fizz1.log(15);
fizz1.log(9);
fizz1.log(1);

