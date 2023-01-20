class Stopwatch {
  constructor(minute, second, milisecond) {
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
  }


   start() {
    console.log("start");
    tens++;
    if(tens <= 9){
      milisecond.innerHTML = "0" + tens;
    }
    if(tens > 9){
      milisecond.innerHTML = tens;
    }
  
    if( tens > 99){
        seconds++
        if(seconds <= 9) {
          second.innerHTML = "0" + seconds;
          tens = 0;
          milisecond.innerHTML = "0" +0;
        }
        if(seconds > 9){
          second.innerHTML = seconds;
        }
    }
    if(seconds > 59){
        minutes++
        if(minutes <= 9) {
              minute.innerHTML = "0" + minutes
              seconds = 0;
              second.innerHTML = "0" + 0; 

        }

        minute.innerHTML = minutes;
        if(minute > 59) {
            this.reset();
        }
    }
  }

  stop() {
    alert("stop");
  }
  reset() {
    alert("Reset");
  }


}
let minutes = 00;
let seconds = 00;
let tens = 00;
let Interval;







let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let milisecond = document.querySelector(".milisecond");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resettBtn = document.querySelector("#resetBtn");

const stopwatch = new Stopwatch(minute, second, milisecond);

startBtn.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(stopwatch.start, 1)
 
});

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
 
});

resettBtn.addEventListener("click", () => {
  stopwatch.reset();

});

