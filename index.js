const getInfos = require('./information.js');
getInfos();

var cowsay = require("cowsay");

console.log(cowsay.say(
    {
        text : " What does the fox say ?",
        e : "oO",
        T : "U",
    }
));