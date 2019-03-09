var fetchFromUtility = require('../typeScript/Utility/utility');
var syncPurpose = require('readline-sync');
var a = syncPurpose.questionInt('Enter the X point to find distance from to origin : ');
var b = syncPurpose.questionInt('Enter the Y point to find distance from to origin : ');
var distance = fetchFromUtility.findDistance(a, b);
console.log("Distnace form Origin is : " + distance);
