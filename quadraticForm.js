var xyz = require('../typeScript/Utility/utility');
var syncPurpose = require('readline-sync');
var a = syncPurpose.question("Enter the A value : ");
var b = syncPurpose.question("Enter the B value : ");
var c = syncPurpose.question("Enter the C value : ");
xyz.roots(a, b, c);
