class Stopwatch {
  constructor(minute, second, milisecond) {
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
  }

  start() {
    console.log(milisecond++);
  }
  stop() {}
  reset() {
    alert("Reset");
  }
}
let minutes = 0;
let seconds = 0;
let tens = 0;
let Interval;

let minute = document.querySelector(".minute").innerText;
let second = document.querySelector(".second").innerText;
let milisecond = document.querySelector(".milisecond").innerText;

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resettBtn = document.querySelector("#resetBtn");

const stopwatch = new Stopwatch(minute, second, milisecond);

startBtn.addEventListener("click", () => {
  stopwatch.start();
});

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
});

resettBtn.addEventListener("click", () => {
  stopwatch.reset();
});
