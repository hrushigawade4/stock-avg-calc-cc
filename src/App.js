import React from "react";
import './App.css';


const App = () => {

  const [firstValue, setFirstValue] = React.useState('');
  const [secondValue, setSecondValue] = React.useState('');
  const [firstValue1, setFirstValue1] = React.useState('');
  const [secondValue1, setSecondValue1] = React.useState('');
  const [error, setError] = React.useState(false);
  const [totalUnits, setTotalUnits] = React.useState(null);
  const [averagePrice, setAveragePrice] = React.useState(null);
  const [totalPrice, setTotalPrice] = React.useState(null);


  const handleCalculate = () => {
    if (!firstValue || !secondValue || !firstValue1 || !secondValue1) {
      setError(true);
      return;
    }
    setError(false);
    console.warn(firstValue, secondValue, firstValue1, secondValue1);
    const firstUnits = Number(firstValue);
    const secondUnits = Number(firstValue1);
    const firstPrice = Number(secondValue);
    const secondPrice = Number(secondValue1);

    const totalUnits = firstUnits + secondUnits;
    const totalPrice = (firstUnits * firstPrice) + (secondUnits * secondPrice);
    const averagePrice = totalPrice / totalUnits;

    console.log("Total Units:", totalUnits);
    console.log("Average Price:", averagePrice);
    console.log("Total Price:", totalPrice);

    setTotalUnits(totalUnits);
    setTotalPrice(totalPrice);
    setAveragePrice(averagePrice);
  };





  return (
    <div className="container">
      <div className="product">
      <h1>Stock Market Average Calculator</h1>
        <div className="purchase-container">
          <div className="purchase-section">
        
        <h3>First Purchase</h3>
        <input className="inputBox" type="number" value={firstValue} placeholder="Enter Unit's Size" onChange={(e) => { setFirstValue(e.target.value) }} />
        {error && !firstValue && <span className="invalid-input">Invalid Unit's Size</span>}
        <input className="inputBox" type="number" value={secondValue} placeholder="Enter Price of Share" onChange={(e) => { setSecondValue(e.target.value) }} />
        {error && !secondValue && <span className="invalid-input">Invalid Price of Share</span>}
        </div>

        <div className="purchase-section">
        <h3>Second Purchase</h3>
        <input className="inputBox" type="number" value={firstValue1} placeholder="Enter Unit's Size" onChange={(e) => { setFirstValue1(e.target.value) }} />
        {error && !firstValue1 && <span className="invalid-input">Invalid Unit's Size</span>}
        <input className="inputBox" type="number" value={secondValue1} placeholder="Enter Price of Share" onChange={(e) => { setSecondValue1(e.target.value) }} />
        {error && !secondValue1 && <span className="invalid-input">Invalid Price of Share</span>}
        </div>
        </div>
        <button className='appButton' onClick={() => {
          setFirstValue(''); setSecondValue(''); setFirstValue1(''); setSecondValue1(''); setError(false); setTotalUnits(null);
          setAveragePrice(null);
          setTotalPrice(null);
        }}>Clear Fields</button>
        <button className='appButton' onClick={handleCalculate}>Calculate Average</button>

        {totalUnits !== null && (
          <div className="results">
            <h3>Results</h3>
            <p>Total Units: {totalUnits}</p>
            <p>Total Price: {totalPrice.toFixed(2)}</p>
            <p>Average Price: {averagePrice.toFixed(2)}</p>
          </div>
        )}
        <div className='footer'><h6> Powered By @Hybrid Engineer</h6></div>
      </div>
    </div>
  );
}

export default App;
