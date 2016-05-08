var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

// Motor 1 : Forward and Reward on PIN 7 (wpi 7) and PIN 11 (wpi 0)
wpi.setup('wpi');
wpi.pinMode(7, wpi.OUTPUT);
wpi.pinMode(0, wpi.OUTPUT);
wpi.digitalWrite(7, wpi.HIGH);
wpi.digitalWrite(0, wpi.LOW);

// Motor 2 : Forward and Reward on PIN 13 (wpi 2) and PIN 15 (wpi 3)
wpi.pinMode(2, wpi.OUTPUT);
wpi.pinMode(3, wpi.OUTPUT);
wpi.digitalWrite(2, wpi.HIGH);
wpi.digitalWrite(3, wpi.LOW);

// Motor 1 PWM on PIN 22 (BCM GPIO 25)
piblaster.setPwm(25, 1);

wait();

function wait(){
	for (var i=0; i<10000; i++) {
		console.log('.');
	}
	
	wpi.digitalWrite(2, wpi.LOW);
	wpi.digitalWrite(7, wpi.LOW);
	wpi.digitalWrite(0, wpi.LOW);
	wpi.digitalWrite(3, wpi.LOW);

	piblaster.setPwm(25, 0);
	piblaster.release(25);
}
