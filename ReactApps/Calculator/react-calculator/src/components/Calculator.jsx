import React, { useState } from "react";
import { Plus, Minus, Divide, X } from "phosphor-react";
const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(input));
    } catch (error) {
      alert("Invalid Expression");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>{result}</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>

      <div className="keypad">
        <button onClick={() => handleClick("/")}>
          <Divide size={24} />
        </button>
        <button onClick={() => handleClick("*")}>
          <X size={24} />
        </button>
        <button onClick={() => handleClick("-")}>
          <Minus size={24} />
        </button>
        <button onClick={() => handleClick("+")}>
          <Plus size={24} />
        </button>
        <div>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("6")}>6</button>
        </div>
        <div>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("2")}>2</button>
        </div>
        <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearInput}>C</button>
        </div>

      </div>
    </div>
  );
};

export default App;
