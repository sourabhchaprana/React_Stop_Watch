import React from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [count, setcount] = React.useState(1);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => ((prevTime + count*1000)  > 0 ? prevTime + count*1000 : 0 ));
      }, 1000);
    }
    // else if (!timerOn) {
    //   clearInterval(interval);
    // }

    return () => clearInterval(interval);
  });

  const handleIncreament = () => {
    if (count <= 9) {
      setcount(count + 1);
    }
  };
  const handleDecreament = () => {
    if (count >= -9) {
      setcount(count - 1);
    }
  };

  return (
    <div className="Timers">
      <h2>Stopwatch</h2>
      <div id="display">
      <span>{("0" + Math.floor(time / 600000)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 60000)%60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 1000)%60)).slice(-2)}</span>
        {/* <span>{("0" + time / 10).slice(-2)}</span> */}
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
      <br />
      <br />
      <button onClick={handleIncreament}>+</button>
      {count}
      <button onClick={handleDecreament}>-</button>
    </div>
  );
};

export default App;