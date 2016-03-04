var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

var pin = 6;
var value = 1;

// Forward on PIN 24 
wpi.setup('wpi');
wpi.pinMode(pin, wpi.OUTPUT);
wpi.digitalWrite(pin, value);

console.log('coucou');
console.log('Pin ' + pin + ' is : ' + wpi.digitalRead(pin));

//piblaster.setPwm(25, 1);
