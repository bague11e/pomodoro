var workLength = 25 * 60;
var shortLength = 5 * 60;
var longLength = 15 * 60;

var chosenLength = workLength;
var currentLength = workLength;
var onBreak = true;

var clockText;
var currentSession = "work";
var runTimerFunction;

var startPauseBtn;

function workSession(){
    currentSession = "work";
    chosenLength = workLength;
    currentLength = workLength;
    newSession();
}

function shortBreak(){
    currentSession = "shortBreak";
    chosenLength = shortLength;
    currentLength = shortLength;
    newSession();
}

function longBreak(){
    currentSession = "longBreak";
    chosenLength = longLength;
    currentLength = longLength;
    newSession();
    
}

function newSession(){
    clearInterval(runTimerFunction);
    onBreak = true;
    document.getElementById("startPauseBtn").innerText = "Start";
    displayTime(chosenLength);
}

function startPauseTimer(){

    startPauseBtn = document.getElementById("startPauseBtn");

    onBreak = !onBreak;
    if(!onBreak){
        startPauseBtn.innerText = "Pause";
        startTimer();
    }

    else{
        startPauseBtn.innerText = "Start";
        pauseTimer();
    }
}

function startTimer(){

    runTimerFunction = setInterval(runTimer, 1000);

}

function runTimer(){

    if(currentLength > 0){
        currentLength--;
        displayTime(currentLength);
    }
    else clearInterval(runTimerFunction);
    
}

function pauseTimer(){
    clearInterval(runTimerFunction);
}

function resetTimer(){

    currentLength = chosenLength;
    newSession();
}



function displayTime(seconds){
    clockText = document.getElementById("timeLeft");
    clockText.innerText = timeToString(seconds);
}

function timeToString(secToTime){

    var seconds = secToTime % 60;
    secToTime -= seconds;
    var minutes = secToTime / 60;

    var displayText = "";

    if(minutes < 10){
        displayText += "0";
    }
    displayText += minutes + ":";
    if(seconds < 10){
        displayText += "0";
    }
    displayText += seconds;

    return displayText;
}