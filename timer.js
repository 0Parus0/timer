class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    this.timerId;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }
  start = () => {
    if (!this.timerId) {
      if (this.onStart) {
        this.onStart(this.timeRemaining);
      }
      this.tick();
      this.timerId = setInterval(this.tick, 20);
    }
  };

  pause = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) this.onComplete();
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) this.onTick(this.timeRemaining);
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    return (this.durationInput.value = time.toFixed(2));
  }
}

export default Timer;
// ("use strict");

// function _defineProperty(obj, key, value) {
//   key = _toPropertyKey(key);
//   if (key in obj) {
//     Object.defineProperty(obj, key, {
//       value: value,
//       enumerable: true,
//       configurable: true,
//       writable: true,
//     });
//   } else {
//     obj[key] = value;
//   }
//   return obj;
// }
// function _toPropertyKey(arg) {
//   var key = _toPrimitive(arg, "string");
//   return typeof key === "symbol" ? key : String(key);
// }
// function _toPrimitive(input, hint) {
//   if (typeof input !== "object" || input === null) return input;
//   var prim = input[Symbol.toPrimitive];
//   if (prim !== undefined) {
//     var res = prim.call(input, hint || "default");
//     if (typeof res !== "object") return res;
//     throw new TypeError("@@toPrimitive must return a primitive value.");
//   }
//   return (hint === "string" ? String : Number)(input);
// }
// class Timer {
//   constructor(durationInput, startBtn, pauseBtn) {
//     _defineProperty(this, "start", () => {
//       console.log(this, `Time to start timer`);
//     });
//     _defineProperty(this, "pause", () => {});
//     this.durationInput = durationInput;
//     this.startBtn = startBtn;
//     this.pauseBtn = pauseBtn;
//     this.startBtn.addEventListener("click", this.start);
//   }
// }
