var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

// Private members
var pinENABLE;
var pinMODE;
var currentMode; // 1 = forward, 0 = backward
var currentSpeed;
var state;

// Public members

module.exports = motor;

function motor(pinENBL, pinMD) {
	this.pinENABLE = pinENBL;
	this.pinMODE = pinMD;
	this.currentSpeed = 0;
	this.currentMode = 1; // forward
	this.state = false;
};

motor.prototype.update = function (speed, mode) {
	wpi.digitalWrite(this.pinMODE, mode);
	piblaster.setPwm(this.pinENABLE, speed);
	this.currentMode = mode;
	this.currentSpeed = speed;
};

motor.prototype.turnON = function() {
	// setting up WiringPi
	wpi.setup('wpi');
	wpi.pinMode(this.pinMODE, wpi.OUTPUT);
	console.log("turning motor on");
	this.state = true;
};

motor.prototype.turnOFF = function() {
	console.log("turning motor off");
	// should we turn PinMODE in wpi.INPUT ?
	piblaster.release(this.pinENABLE);
	this.state = false;
}

	// debug function
motor.prototype.toString = function () {
	return "state=" + this.state + " Pin ENABLE=" + this.pinENABLE + " Pin MODE=" + this.pinMODE + " current speed=" + this.currentSpeed + " current mode=" + this.currentMode;
};