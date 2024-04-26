import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Data Structures and Algorithm </h1>

      <Link to={"/data-structures"}>Data Structures</Link>
      <Link to={"/algorithm"}>Algorithm</Link>
    </div>
  );
}

export default App;
