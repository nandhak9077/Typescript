var fetch1 = require('../typeScript/Utility/utility');

var fetch2 = require('readline-sync');
var no:number=fetch2.questionInt("Please enter the number to find prime factor : ");
fetch1.primeFactors(no);