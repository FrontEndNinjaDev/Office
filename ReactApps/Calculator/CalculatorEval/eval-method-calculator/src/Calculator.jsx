import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input
          autoComplete="off"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="box">
          <input type="button" value="C" onClick={(e) => setValue("")} />
          <input
            type="button"
            value="AE"
            onClick={(e) => setValue(value.slice(0, -1))}
          />
          <input
            type="button"
            value="."
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="/"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="button"
            value="7"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="8"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="9"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="*"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="button"
            value="4"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="5"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="6"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="+"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="button"
            value="1"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="2"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="3"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="-"
            onClick={(e) => setValue(value + e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="button"
            value="00"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="0"
            onClick={(e) => setValue(value + e.target.value)}
          />
          <input
            type="button"
            value="="
            id="equal"
            onClick={() => setValue(eval(value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
