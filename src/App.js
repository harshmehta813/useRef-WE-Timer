import "./styles.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  var [time, setTime] = useState(0);
  const timerRef = useRef(null);
  var [end, setEnd] = useState(null);
  useEffect(() => {
    return pauseTimer;
  }, []);
  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
        endTimer();
      }, 1000);
    }
  };
  const pauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setTime(0);
  };

  const handleChange = (e) => {
    var end = Number(e.target.value);
    setEnd(end);
  };
  const endTimer = () => {
    time = time + 1;
    if (time === end) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <h2>{time}</h2>
      <div>
        <input ype="number"
          placeholder="Enter Time Here"
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={startTimer}>START</button>
        <button onClick={pauseTimer}>PAUSE</button>
        <button onClick={resetTimer}>RESET</button>
      </div>
    </div>
  );
}

export default App;
