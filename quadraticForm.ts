var xyz = require('../typeScript/Utility/utility');
var syncPurpose = require('readline-sync');
var a:number=syncPurpose.question("Enter the A value : ");
var b:number=syncPurpose.question("Enter the B value : ");
var c:number=syncPurpose.question("Enter the C value : ");
xyz.roots(a,b,c);