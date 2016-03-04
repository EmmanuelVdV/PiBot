var piblaster = require('pi-blaster.js');
var wpi = require('wiring-pi');

piblaster.setPwm(25, 0);
piblaster.setPwm(24, 0);

piblaster.release(24);
piblaster.release(25);
