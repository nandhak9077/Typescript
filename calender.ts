var take:any = require('util');
var Utility:any = require('../typeScript/Util/utility');
var read = require('readline-sync');
function calender() {
    var month :number= +process.argv[2];
    var year :number= +process.argv[3];
    
    var week :any= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var dates:any= [0, 31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];
   
    var day:any = Utility.dayOfWeek(1, month, year);
    console.log(day);
    var leap:any= Utility.leapYear(year);
    if (leap = true) {
        
        dates[2] = 29;
    }
    for (var i = 0; i < week.length; i++) {
        take.print(week[i] + "  ");
    }
    console.log();
    for (var i = 0; i < (day * 5); i++) {
        take.print(" ");
    }

    for (var i = 1; i <= dates[month]; i++) {
        if (i < 10) {
            take.print(" " + i + "   ");
        }

        if (i > 9) {
            take.print("" + i + "   ")
        }
        if ((i + day) % 7 == 0) {
            console.log();
        }

    }

    console.log("\n\n");

}
calender();
