import { useState } from "react";
import "./App.css";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

  const decreaseCounter = () => {
    setCounter((counter) => counter - 1);
  };

  const increaseCounter = () => {
    setCounter((counter) => counter + 1);
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
    <div>
      <div>
        <button onClick={decreaseStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
        <button onClick={decreaseCounter}>-</button>
        <span>Count: {step > 1 ? counter * step : counter}</span>
        <button onClick={increaseCounter}>+</button>
      </div>
      {/* {counter === 0 ? (
        <p>
          Today is{" "}
          {`${days[d.getDay()]} ${month[d.getMonth()]} ${
            d.getDate() <= 9 ? "0" + d.getDate() : d.getDate()
          } ${d.getFullYear()}`}
        </p>
      ) : (
        <p>
          {counter >= 1 && step > 1
            ? `${step * counter} days from today is  ${t(
                d.setDate(d.getDate() + counter * step)
              )}`
            : `${counter} days from today is ${t(
                d.setDate(d.getDate() + counter)
              )}`}
        </p>
      )} */}

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
    </div>
  );
}

export default App;
