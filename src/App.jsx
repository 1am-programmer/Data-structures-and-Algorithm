import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl p-6 text-center">
        Data Structures and Algorithm{" "}
      </h1>
      <div className=" flex gap-4 justify-center items-center ">
        <button className=" px-4 py-2 bg-blue-500 text-white rounded-md">
          <Link to={"/data-structures"} className="">
            Data Structures
          </Link>
        </button>

        <button className=" px-4 py-2 bg-red-500 text-white rounded-md">
          <Link to={"/algorithm"} className="">
            Algorithm
          </Link>
        </button>
      </div>
    </div>
  );
}

export default App;
