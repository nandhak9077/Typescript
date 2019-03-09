var fetchFromUtility = require('../typeScript/Utility/utility');
var syncPurpose=require('readline-sync');
var a :number=syncPurpose.questionInt('Enter the X point to find distance from to origin : ');
var b :number=syncPurpose.questionInt('Enter the Y point to find distance from to origin : ');
var distance:number=fetchFromUtility.findDistance(a,b);
console.log("Distnace form Origin is : "+distance);