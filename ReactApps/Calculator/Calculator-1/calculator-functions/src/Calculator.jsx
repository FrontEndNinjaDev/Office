import React, { useState } from "react";


const Calculator = () => {


    const [value, setValue] = useState('');
    console.log("🚀 ~ file: Calculator.jsx:8 ~ Calculator ~ value:", value)

    const cut = () =>{
       setValue(value.slice(0,-1))
    }

    const dot = () =>{
        setValue(value + '.')
    }

    const handleEqual = () =>{
      try {
        const calculatedResult = calculate(value)
        setValue(calculatedResult.toString())
      } catch (error){
        setValue('Error')
      }
    }

    const calculate = (expression) =>{
      const tokens = expression.split(/([+\-*/])/)
      let total = parseFloat(tokens[0]);

      for(let i = 1 ; i < tokens.length; i+=2) {
        const operator = tokens[i]
        const nextNumber = parseFloat(tokens[i+1])

        if(isNaN(nextNumber)) {
          throw new Error('Invalid Expression')
        }
        switch(operator) {
          case '+':
            total +=nextNumber;
            break;
            case '-':
            total -=nextNumber;
            break;
            case '*':
            total *=nextNumber;
            break;
            case '/':
              if(nextNumber === 0 ){
                throw new Error('Cannot Divide By Zero')
              }
              total /= nextNumber;
              break;
              default:
              throw new Error('Unknown Operator')
        }
      }
      return total
    }

   

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        </div>
        <div className="box">
          <button onClick={()=>setValue('')}>C</button>
          <button onClick={cut}>AE</button>
          <button onClick={dot}>.</button>
          <button value='/' onClick={(e)=>setValue( value + e.target.value)}>/</button>
        </div>
        <div className="box">
          <button value="7" onClick={(e)=>setValue( value + e.target.value)} >7</button>
          <button value="8" onClick={(e)=>setValue( value + e.target.value)} >8</button>
          <button value="9" onClick={(e)=>setValue( value + e.target.value)}>9</button>
          <button value="*" onClick={(e)=>setValue( value + e.target.value)}>*</button>
        </div>
        <div className="box">
        <button value="4" onClick={(e)=>setValue( value + e.target.value)} >4</button>
          <button value="5" onClick={(e)=>setValue( value + e.target.value)} >5</button>
          <button value="6" onClick={(e)=>setValue( value + e.target.value)}>6</button>
          <button value="+" onClick={(e)=>setValue( value + e.target.value)}>+</button>
        </div>
        <div className="box">
          <button value="3" onClick={(e)=>setValue( value + e.target.value)} >3</button>
          <button value="2" onClick={(e)=>setValue( value + e.target.value)} >2</button>
          <button value="1" onClick={(e)=>setValue( value + e.target.value)}>1</button>
          <button value="-" onClick={(e)=>setValue( value + e.target.value)}>-</button>
        </div>
        <div className="box">
        <button value="00" onClick={(e)=>setValue( value + e.target.value)}>00</button>
          <button value="0" onClick={(e)=>setValue( value + e.target.value)}>0</button>
          <button value="=" id="equal" onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
