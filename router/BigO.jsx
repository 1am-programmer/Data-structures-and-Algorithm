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
        <li className="list-disc">
          It is not important to understand how an algorithm performs in a
          single dataset, but in all possible datasets
        </li>
        <li className="list-disc">
          Sometimes Big O is referred to as the upper bound of the algorithm
          because Big O measures how the algorithm performs in the worstcase
          scenario
        </li>
      </ul>

      <div>
        <h3 className="font-bold py-5 text-center">
          Constant Time represented as O(1)
        </h3>
        <p>
          It take same amount of time in any given case , this means the runtime
          is constant, it doesn't change
          <br />
          <span className="italic">
            Reading a value in a list is also a constant time operation
          </span>
        </p>
        <div>
          <p className="font-bold">In Binary Search</p>
          <p>
            If you notice: anytime we duble the value of n, the number of
            operation it takes to reduce the list, increments by 1
          </p>
          <span className="italic font-bold p-6">
            A mathematical relation to this is logarithm of n
          </span>
          <p className="underline">Exponentials</p>
          <ul>
            <li className="list-disc">
              2 X 1 = 2, which can be written as 2^1 =2
            </li>
            <li className="list-disc">
              2 X 2= 4, which can be written as 2^2 =4
            </li>
            <li className="list-disc">
              2 X 2 X 2 = 8, which can be written as 2^3 =8
            </li>
            <li className="list-disc">
              2 X 2 X 2 x 2 = 16, which can be written as 2^4 =16
            </li>
          </ul>
          <p>
            So in this example, the 2 and 3 are the <strong>Exponents </strong>{" "}
            , they determine how the value grows the inverse of the exponent is
            a <strong> Logarithm</strong>
          </p>
          <p className="font-bold underline p-5">Logarithm</p>
          <ul>
            <li className="list-disc">
              In this case Log2 8 = 3 -
              <span className="italic">
                Means how many times do i have to divide 8 by 2 to get 1, which
                if we understand correctly, it is 3 times{" "}
                <span className="font-bold"> Using Binary search method </span>
              </span>
            </li>
            <li className="list-disc">
              In this case Log2 16 = 4
              <span className="italic">
                Means how many times do i have to divide 16 by 2 to get 1, which
                if we understand correctly, it is 4 times
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-bold py-5 text-center">
          Logarithmic Runtime also called Sublinear represented as O(log n) or
          sometimes O(ln n)
        </h3>

        <p>
          {" "}
          For a given value of n, the number of tries to find the worst case
          scenario is log n + 1
        </p>
        <p>
          Sublinear runtimes are sometimes preferred to, over linear , because
          it is more efficient, although linear has it's own advantages: For
          example, when the input is not sorted
        </p>
      </div>
      <div>
        <h3 className="font-bold py-5 text-center">
          Quadratic Time represented by O(n2) or say an algorithm with a
          quadratic runtime
        </h3>
        <ul>
          <li className="list-disc">
            For any given value of n, we carry out n square (n2) number of
            operations
          </li>

          <li className="list-disc">
            Most search Algorithm have a worst case algorithm runtime
          </li>
          <li className="list-disc">
            In addition to Quadratic runtime, you may run into a cubic runtime
            as you encounter different Algorithm, here the algorithm executes
            the n3 or n^3 (n raise to the power of the 3rd number of operations)
            <span>
              For a small changes in n, there is a significant change in the
              number of operations that we need to carry out{" "}
            </span>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold py-5 text-center">
          Quasilinear runtime represented as O(n log n ) which means n times
          logarithm of n
        </h3>
        <p></p>
        <ul>
          <li className="list-disc">
            For every value of n, we are going to execute a log n number of
            operations hence the runtime of n times log n operations
          </li>
          <li className="list-disc">
            A Quasilinear runtime, has a runtime that lies somewhere between
            linear and quadratic runtimes
          </li>
        </ul>
        <p>Where we can see this runtime in practical use:</p>
        <p>
          Sorting Algorithms,{" "}
          <span>
            e.g Merge Sort:
            <br />
            <span>Has a worse case runtime of O(n log n)</span>
          </span>
        </p>
      </div>
    </div>
  );
}
