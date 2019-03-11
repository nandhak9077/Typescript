var read = require('readline-sync');
var num = read.questionInt("Enter non -ve value : ");
sqrRoot(num);
function sqrRoot(num) {
    if (num > 0) {
        //formula
        var t = num;
        var epsilon = 1e-15;
        while (Math.abs(t - num / t) > epsilon * t) {
            t = (num / t + t) / 2;
        }
        console.log("Squre root of non negative number is : ", t);
    }
    else {
        console.log("Number should be positive ");
    }
}
