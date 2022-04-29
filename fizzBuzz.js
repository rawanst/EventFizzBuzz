const FizzBuzz = require('./emitter');
const fizzBuzz = new FizzBuzz();

fizzBuzz.on('messageRecu', function(payload){
	console.log('Message reçu, payload:', payload);
});

module.exports = fizzBuzz;
