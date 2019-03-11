var utility = require('../typeScript/Utility/utility');
var read = require("readline-sync");
function monthlyPayment() {
    var principle = read.questionInt("please!! Enter your principle here...!!");
    var year = read.questionInt("please!! Enter your year here...!!");
    var rate = read.questionInt("please!! Enter your rate here...!!");
    utility.monthlyPayment(principle, year, rate);
}
monthlyPayment();
