import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  const decreaseStep = () => {
    if (step >= 1) {
      setStep((step) => step - 1);
    }
  };

  const increaseStep = () => {
    setStep((step) => step + 1);
  };

  const changeStep = (e) => {
    setStep(+e.target.value);
  };

  const decreaseCounter = () => {
    setCounter((counter) => counter - 1);
  };

  const increaseCounter = () => {
    setCounter((counter) => counter + 1);
  };

  const changeCounter = (e) => {
    const inputValue = parseInt(e.target.value) || 0;
    setCounter(inputValue);
  };

  const resetDate = () => {
    setCounter(0);
    setStep(0);
  };

  const d = new Date();

  const t = (timestamp) => {
    if (timestamp) {
      const date = new Date(timestamp);
      return date.toDateString();
    } else {
      const date = new Date();
      return date.toDateString();
    }
  };

  return (
    <div className="main">
      <div className="step">
        <button onClick={decreaseStep}>-</button>
        <input
          type="range"
          min="1"
          max="100"
          value={step}
          onChange={changeStep}
        />
        <button onClick={increaseStep}>+</button>
      </div>
      <div className="counter">
        <button onClick={decreaseCounter}>-</button>
        <input
          type="text"
          id="numericInput"
          name="numericInput"
          pattern="[0-9]*"
          value={step > 1 ? counter * step : counter}
          onChange={changeCounter}
        />
        <button onClick={increaseCounter}>+</button>
      </div>

      <p>
        {counter === 0 && `Today is ${t()}`}{" "}
        {counter >= 1 &&
          step >= 0 &&
          step <= 1 &&
          `${counter} days from Today is ${t(
            d.setDate(d.getDate() + counter)
          )}`}
        {step > 1 &&
          counter >= 1 &&
          `${counter * step} days from Today is ${t(
            d.setDate(d.getDate() + counter * step)
          )}`}
        {counter < 0 &&
          step >= 0 &&
          step <= 1 &&
          `${Math.abs(counter)} days back from Today is ${t(
            d.setDate(d.getDate() + counter)
          )}`}
        {counter < 0 &&
          step > 1 &&
          `${Math.abs(counter) * step} day back from Today is ${t(
            d.setDate(d.getDate() + counter * step)
          )}`}
      </p>

      <button onClick={resetDate}>Reset</button>
    </div>
  );
}

export default App;
