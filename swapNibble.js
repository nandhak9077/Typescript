var util = require("../typeScript/Utility/utility");
var r = require("readline-sync");
var getName = r.question("Enter the String here....!!!!==");
var out = util.swapNibble(getName);
console.log(out);