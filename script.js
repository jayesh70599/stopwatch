
var count = 0;
var min = 0;
var sec = 0;

var temp = false; /* temp shows if stopwatch is currently running or not */

function start(){

   if(temp == false){
    temp = true;

    stopwatch();
   }

}

function stop(){

    temp = false;

}

function reset(){

    temp = false;

    count =0;
    sec=0;
    min=0;


    document.getElementById("count").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";



}

function stopwatch(){

    if(temp == true){
        count = count +1;

        if(count == 100){
            sec += 1;
            count =0;
        }

        if(sec == 60){
            min += 1;
            sec=0;
        }

        /* to show timer in double digits when values of count, min, sec are less than 10 */

        var count1 = count; 
        var sec1 = sec;
        var min1 = min;

        if(count1 < 10){
            count1 = "0" + count;
        }

        if(sec1 < 10){
            sec1 = "0" + sec;
        }

        if( min1 < 10){
            min1 = "0" + min;
        }

        document.getElementById("count").innerHTML = count1;
        document.getElementById("min").innerHTML = min1;
        document.getElementById("sec").innerHTML = sec1;
    
        setTimeout("stopwatch()", 10);
    }
    
}