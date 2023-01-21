class Stopwatch {
  constructor(minute, second, milisecond) {
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
    
  }

  start() {



      tens++
      console.log(this.milisecond)
      console.log(this.minute)
      console.log(this.second)
      if(tens >99){
    
        seconds++
        tens = 0
        
     } 
     if(seconds > 59){
      minutes++
      minute.innerText = minutes;
      seconds=0;
     } 
     if(minutes > 99){
        minutes = 0
     } 

  }
  stop() {}
  reset() {
    alert("Reset");
  }
}
let minutes = 0;
let seconds = 0;
let tens = 0;
let loadingTimer;

let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let milisecond = document.querySelector(".milisecond");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resettBtn = document.querySelector("#resetBtn");

const stopwatch = new Stopwatch(minute, second, milisecond);

startBtn.addEventListener("click", () => {
        timer();
});

function timer() {

  setInterval(stopwatch.start, 1000 )
}

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
});

resettBtn.addEventListener("click", () => {
  stopwatch.reset();
});
