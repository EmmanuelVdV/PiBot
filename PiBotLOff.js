var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

setTimeout(dw(7, wpi.LOW), 200);
setTimeout(dw(0, wpi.LOW), 200);
setTimeout(dw(2, wpi.LOW), 200);
setTimeout(dw(3, wpi.LOW), 200);

function dw(pin, value) {
	wpi.digitalWrite(pin, value);
}

wpi.pinMode(7, wpi.INPUT);
wpi.pinMode(0, wpi.INPUT);
wpi.pinMode(2, wpi.INPUT);
wpi.pinMode(3, wpi.INPUT);


piblaster.setPwm(25, 0);
//piblaster.setPwm(24, 0);

piblaster.release(25);
//piblaster.release(24);
