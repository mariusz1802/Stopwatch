class Stopwatch {
  constructor(minute, second, milisecond) {
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
    
  }
  start() {
    // Miliseconds
    tens++
    if(tens <= 9) {
      milisecond.innerText = "0" + tens;
    }else if (tens > 9 ){
      milisecond.innerText  = tens
    }
    
    if(tens >99){
      seconds++
      tens = 0
   } 
    // Seconds
    if(seconds > 59){
      minutes++
      seconds=0;
     } 

     if(seconds <= 9) {
      second.innerText = "0" + seconds;
    }else if (seconds > 9 ){
      second.innerText  = seconds
    }
 
    // Minutes
    if(minutes <= 9) {
      minute.innerText = "0" + minutes;
    }else if (minutes > 9 ){
      minute.innerText  = minutes
    }

     if(minutes > 99){
        minutes = 0
     } 
  }
  stop() {
    clearInterval(interval)

    
  }

  reset() {
    clearInterval(interval);
    minute.innerText = "00";
    second.innerText= "00";
    milisecond.innerText = "00";
    minutes = 0;
    tens = 0;
    seconds = 0;
}
}



let minutes = 00;
let seconds = 00;
let tens = 00;
let loadingTimer;

let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let milisecond = document.querySelector(".milisecond");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resettBtn = document.querySelector("#resetBtn");

const stopwatch = new Stopwatch(minute, second, milisecond);
let interval;
console.log(typeof interval);

startBtn.addEventListener("click", () => {
        timer();
});

function timer() {

 interval = setInterval(stopwatch.start, 10 )
}

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
});

resettBtn.addEventListener("click", () => {
  stopwatch.reset();
});
