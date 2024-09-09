import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="product">
        <h1>Stock Market Average Calculator</h1>
        <h3>First Purchase</h3>
        <input className="inputBox" type="text" placeholder="Enter Unit's Size" />
        <input className="inputBox" type="text" placeholder="Enter Price of Share" />
        <h3>Second Purchase</h3>
        <input className="inputBox" type="text" placeholder="Enter Unit's Size" />
        <input className="inputBox" type="text" placeholder="Enter Price of Share" />
        <button className='appButton'>Clear Fields</button>
        <button className='appButton'>Calculate Average</button>
        <div className='footer'><h6> Powered By @Hybrid Engineer</h6></div>
      </div>
    </div>
  );
}

export default App;
