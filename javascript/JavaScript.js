
var breakl = 5;
var work = 25;
var mood = true, iswork = true;
const timer = {
 m: work - 1,
 s : 60
}

const mbbtn = document.getElementById("minusbreak");
const pbbtn = document.getElementById("plusbreak");
const mlbtn = document.getElementById("minusLENGTH");
const plbtn = document.getElementById("plusLENGTH");
const Pomodoro = document.getElementById("Pomodoro");

mbbtn.addEventListener("click", function (event) {
    //event.preventDefault();
    if (breakl > 0) { breakl--; }
    let msg = document.getElementById("bvalue");
    msg.innerText = breakl;
    timer.m = breakl - 1;
    timer.s = 60;
    clearInterval(timerId);
});
pbbtn.addEventListener("click", function (event) {
    //event.preventDefault();
    if (breakl < 60) { breakl++; }
    let msg = document.getElementById("bvalue");
    msg.innerText = breakl;
    timer.m = breakl - 1;
    timer.s = 60;
    clearInterval(timerId);
});
mlbtn.addEventListener("click", function (event) {
   
    if (work > 0) { work--; }
    let msg = document.getElementById("lvalue");
    msg.innerText = work;
    timer.m = work - 1;
    timer.s = 60;
    clearInterval(timerId);
});
plbtn.addEventListener("click", function (event) {
    if (work < 60) { work++; }
    let msg = document.getElementById("lvalue");
    msg.innerText = work;
    timer.m = work - 1;
    timer.s = 60;
    clearInterval(timerId);
});
var timerId;
//You have to use at least an Event listener, For loop, and Function.\
Pomodoro.addEventListener("click", function (event) {
    console.log("Start");
    
    let total = parseInt(work * 60);
    
    let msg = document.getElementById("Pomodorotxt");
    let inner = document.getElementById("fillid");
    
    if (mood) {
        mood = false;
         timerId = setInterval(() => {
             let str = getTime();
             msg.innerText = str;
             let currentmin = parseInt(timer.m) * 60 + parseInt(timer.s);
             console.log(currentmin);
             let pcr = currentmin;
             pcr = pcr / total * 100;
            
             console.log(100 - pcr);
             if (pcr === 0) { pcr = 100;}
             inner.style.height = pcr + '%';
        }, 1000);
    }
    else {
        console.log(mood);
        mood = true;
        clearInterval(timerId);
    }   
    function getTime() {
        timer.s--;
        if (timer.s == 0)
        {
            timer.s = 60;
            timer.m--;
        }
        if (timer.m < 0) {
            if (iswork === true) { iswork == false; timer.m = breakl - 1; }
            else { iswork == true; timer.m = work - 1;} 
        }
        return timer.m + " : " + timer.s;
    }
});
function sethight(hight, innerel)
{
    innerel.style.height = hight + '%';
}
