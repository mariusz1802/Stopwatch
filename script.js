class Stopwatch {
  constructor(minute, second, milisecond) {
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
  }

  start() {
    alert("start");
  }
  stop() {
    alert("stop");
  }
  reset() {
    alert("Reset");
  }

  updateDisplay() {}
}

const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");

const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resettBtn = document.querySelector("#resetBtn");

const stopwatch = new Stopwatch(minute, second, milisecond);

startBtn.addEventListener("click", () => {
  stopwatch.start();
  stopwatch.updateDisplay();
});

stopBtn.addEventListener("click", () => {
  stopwatch.stop();
  stopwatch.updateDisplay();
});

resettBtn.addEventListener("click", () => {
  stopwatch.reset();
  stopwatch.updateDisplay();
});

function secondsRound() {
  let init = 00;

  setInterval(() => {
    second.innerText = 10;
  }, 1000);
}

secondsRound();
