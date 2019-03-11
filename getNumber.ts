var utility =require('../typeScript/Utility/utility');
var read = require('readline-sync');

var low:number = read.questionInt("Enter starting number : ");
var high:number=read.questionInt("Enter last number : ");
var n :number= utility.findNumber(low,high,read);
console.log("Your number is : "+n)