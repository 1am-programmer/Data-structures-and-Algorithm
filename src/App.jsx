import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Data Structures and Algorithm </h1>
      <div className="flex gap-6">
        <button>
          <Link to={"/data-structures"}>Data Structures</Link>
        </button>

        <button>
          <Link to={"/algorithm"}>Algorithm</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
