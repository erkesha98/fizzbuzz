import React, { useState } from "react";

const FizzBuzz = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset=()=>{
    setCount(0)
  }

  const showMessage = () => {
    if (count === 0) {
      return <p></p>;
    } else if (count % 3 === 0 && count % 5 === 0) {
      return <p>FizzBuzz</p>;
    } else if (count % 2 === 0) {
      return <p>Fizz</p>;
    } else {
      return <p>Buzz</p>;
    }
  };
  return (
    <div className="fizzBuzz">
      <div className="buttons">
        <button onClick={decrement}>Decrement</button>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
      </div>

      <div className="message">{showMessage()}</div>
      <div className="reset"><button onClick={reset}>Reset</button></div>
    </div>
  );
};

export default FizzBuzz;
