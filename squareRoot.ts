var read = require('readline-sync');
    var num:number = read.questionInt("Enter non -ve value : ")
    sqrRoot(num);
    function sqrRoot(num:number) {
        if (num > 0) {
            //formula
            var t:number = num;
            var epsilon:number= 1e-15;
            while (Math.abs(t - num / t) > epsilon * t) {
                t = (num / t + t) / 2;
            }
            console.log("Squre root of non negative number is : ", t)
        }
        else {
            console.log("Number should be positive ");
        }
}

