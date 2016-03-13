var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');


var motor = (function () {

	// Private members
	var pinENABLE;
	var pinMODE;
	var currentMode; // 1 = forward, 0 = backward
	var currentSpeed;

	// Public members
	return {
		init: function (pinENBL, pinMD) {
			this.pinENABLE = pinENBL;
			this.pinMODE = pinMD;
			this.currentSpeed = 0;
			this.currentMode = 1; // forward

			// setting up WiringPi
			wpi.setup('wpi');
			wpi.pinMode(this.pinMODE, wpi.OUTPUT);

			this.update(this.currentSpeed, this.currentMode);

			return this;
		},

		update: function (speed, mode) {
			wpi.digitalWrite(this.pinMODE, mode);
			piblaster.setPwm(this.pinENABLE, speed);
			this.currentMode = mode;
			this.currentSpeed = speed;
		}
	};

})();

module.exports = motor;