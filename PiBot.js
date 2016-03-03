var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

// Forward on PIN 24 
//wpi.wiringPiSetup();
//wpi.pinMode(13, 'OUTPUT');
//wpi.digitalWrite(13, 'HIGH');


piblaster.setPwm(25, 1);
