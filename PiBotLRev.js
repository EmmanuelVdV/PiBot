var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

// Forward and Reward on PIN 3 (wpi 8) and PIN 5 (wpi 9)
wpi.setup('wpi');
wpi.pinMode(8, wpi.OUTPUT);
wpi.pinMode(9, wpi.OUTPUT);
wpi.digitalWrite(8, 0);
wpi.digitalWrite(9, 1);

piblaster.setPwm(25, 0.5);
