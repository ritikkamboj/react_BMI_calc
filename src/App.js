import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="App">
      <div className="container">
        <form>
          <h1>BMI Calculator</h1>
          <div>
            <label>Weight(in Kgs)</label>
            <input placeholder="Enter Weight value" value={weight} onChange={e => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(in metres)</label>
            <input placeholder="Enter Height value" value={height} onChange={e => setHeight(e.target.value)} />
          </div>
          <div>
            <button>Submit</button>
            <button>Reload</button>
          </div>
          <div>
            <h3>Your BMI is : </h3>
            <p>message come according to your BMI</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
