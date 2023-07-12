import React, { useState } from "react";

const Calculator = () => {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);
  const [result, setResult] = useState(0);

  const handleChange1 = (e) => {
    setInputValue1(parseInt(e.target.value));
  };

  const handleChange2 = (e) => {
    setInputValue2(parseInt(e.target.value));
  };
  const handleAddition = () => {
    const sum = inputValue1 + inputValue2;
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = inputValue1 - inputValue2;
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = inputValue1 * inputValue2;
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = inputValue1 / inputValue2;
    setResult(quotient);
  };
  return (
    <div className="container">
      <div className="input-number">
        <input type="number" value={inputValue1} onChange={handleChange1} />
        <input type="number" value={inputValue2} onChange={handleChange2} />
      </div>
      <span>Result: {result}</span>
      <div className="btn-calculator">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
