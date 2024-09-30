import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  function reload() {
    window.location.reload(true);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter the valid values');
    }
    else {
      let bmi = (weight / (height * height)).toFixed(1);
      console.log(bmi);
      setBmi(bmi);

      if (bmi > 25)
        setMessage('you are OverWeight');
      else if (bmi > 18 && bmi <= 25)
        setMessage('You are well maintained');
      else if (bmi <= 18) {
        setMessage('You are underWeight');

      }

    }


  }
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>BMI Calculator</h1>
          <div>
            <label>Weight(in Kgs)</label>
            <input placeholder="Enter Weight value" value={weight} onChange={e => setWeight(e.target.value)} type="number" />
          </div>
          <div>
            <label>Height(in metres)</label>
            <input placeholder="Enter Height value" value={height} onChange={e => setHeight(e.target.value)} type="number" />
          </div>
          <div>
            <button>Submit</button>
            <button onClick={reload}>Reload</button>
          </div>
          <div>
            <h3>Your BMI is :{bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
