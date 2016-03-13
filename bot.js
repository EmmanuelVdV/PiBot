var motor = require('./motor.js');

const PIN_ENABLE_RIGHT = 25;
const PIN_MODE_RIGHT = 5;
const PIN_ENABLE_LEFT = 24; // to be defined
const PIN_MODE_LEFT = 7; // to be defined

var bot = (function () {

	// Private members
	var motorRight;
	var motorLeft;
	var currentSpeed;
	var defaultTransition;

	// Public members
	return {
		init: function () {
			this.currentSpeed = 0;
			this.defaultTransition = 0.2 // 20% acceleration
			this.motorRight = new motor(PIN_ENABLE_RIGHT, PIN_MODE_RIGHT);
			this.motorLeft = new motor(PIN_ENABLE_LEFT, PIN_MODE_LEFT);
			return this;
		},

		accelerate: function (targetSpeed, transition) {
			// maybe private
		},

		decelerate: function (targetSpeed, transition) {
			// same
		},

		start: function() {
			this.motorLeft.turnON();
			this.motorRight.turnON();
		},

		stop: function () {
			this.motorLeft.turnOFF();
			this.motorRight.turnOFF();
		},

		turnRight: function () {
			// maybe turn only but to be implemented later
		},

		turnLeft: function () {
			// same
		},

		forward: function () {

		},

		backward: function () {

		},

		// debug function
		getData: function () {
			console.log('current values are :\n' + this.motorRight.toString() + '\n' + this.motorLeft.toString()) + '\n';
		}
	};

})();

module.exports = bot;
