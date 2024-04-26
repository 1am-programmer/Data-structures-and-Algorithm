import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Data Structures and Algorithm </h1>
      <div className="flex gap-6">
        <Link to={"/data-structures"} className="">
          Data Structures
        </Link>

        <Link to={"/algorithm"} className="">
          Algorithm
        </Link>
      </div>
    </div>
  );
}

export default App;
