
var count1 = 0;
var min1 = 0;
var sec1 = 0;

var temp = false;

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

    count1 =0;
    sec1=0;
    min1=0;


    document.getElementById("count").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";



}

function stopwatch(){

    if(temp == true){
        count1 = count1 +1;

        if(count1 == 100){
            sec1 += 1;
            count1 =0;
        }

        if(sec1 == 60){
            min1 += 1;
            sec1=0;
        }

        var count = count1; 
        var sec = sec1;
        var min = min1;

        if(count < 10){
            count = "0" + count1;
        }

        if(sec < 10){
            sec = "0" + sec1;
        }

        if( min < 10){
            min = "0" + min1;
        }

        document.getElementById("count").innerHTML = count;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sec").innerHTML = sec;
    
        setTimeout("stopwatch()", 10);
    }
    
}