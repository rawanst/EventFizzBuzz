const EventEmitter = require('events');

class FizzBuzz extends EventEmitter {
	log(payload){
		console.log('Event envoyé');
		this.emit('messageRecu, payload);
	}
}

module.exports = FizzBuzz;
