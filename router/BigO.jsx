import React from "react";

export default function BigO() {
  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="font-bold text-4xl text-center"> Big O</h1>
      <p className="text-center">
        {/* Big O notation is a mathematical notation that describes the limiting
        behavior of a function when the argument tends towards a particular
        value or infinity. */}
        Theoritical definition of the complexity of an algorithm as a function
        of size
      </p>
      <p>
        O(n)
        <span> comes from order of magnitude of complexity</span>
      </p>
      <p className="underline py-4">Useful notes about Big-O</p>
      <ul>
        <li className="list-disc">
          Big O is a useful notation for understanding both time and space
          complexity but only when comparing amongst algorithms that solve the
          same problem.
        </li>
        <li className="list-disc">
          Big O measures complexity as the input grows
        </li>
        <li className="list-disc"></li>
        <li className="list-disc">
          It is not important to understand how an algorithm performs in a
          single dataset, but in all possible datasets
        </li>
        <li className="list-disc">Big O measures the upbound</li>
      </ul>
    </div>
  );
}
