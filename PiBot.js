var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

// Forward on PIN 24 (wpi 5)
wpi.setup('wpi');
wpi.pinMode(5, wpi.OUTPUT);
wpi.digitalWrite(5, 1);


piblaster.setPwm(25, 1);
