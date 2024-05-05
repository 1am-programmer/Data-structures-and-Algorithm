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
        <p className="italic">Most times loops are linear algorithms</p>
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
            The first part of merge sort cuts those lists into sublists with
            half the numbers, whch is similar to binary search
          </span>
        </p>
      </div>
      <div>
        <h3 className="font-bold py-5 text-center">
          Polynomial RunTime represented by O(n^2) or O(n^3)
        </h3>
        <span>
          An algorithm is considered to have a polynomial runtime if for a given
          value of n it's worst case runtime is in the form of O(n ^k)
        </span>
        <p>
          Where K means some value which can be k=2 i.e Quadratic runtime, or
          k=3 i.e Cubic runtime
        </p>
        <p className="italic">
          Algorithm with an upper bound or a runtime with a big O value that is
          polynomial are considered efficient and are likele to be used in
          practice
        </p>
      </div>
      <div>
        <h3 className="font-bold py-5 text-center">
          Unefficient Runtimes:- Exponential Runtimes
        </h3>
        <p>
          {" "}
          An Exponential runtime are algorithms with a Big O value of some
          number raised to the nth power{" "}
          <strong>O(X raise to power n) or O(Xn)</strong>
        </p>
      </div>
      <div>
        <h3 className="font-bold py-5 text-center">
          Brute Force 10^n , where n represent the number of dials
        </h3>
        <p>
          Searching through individual values, until you stumble on the right
          one
        </p>
        <ul>
          <li className="list-disc">
            The reason this algorithm is so inefficient is because with one more
            dial, the number of operations increase significantly
          </li>
        </ul>
        <p>
          Why this algorithm is so inefficient in a real world scenario for
          example :- A password
        </p>
        <p>
          {" "}
          In a typical password field implemented well, we are allowed to use
          letters of the english alphabet; which are 26 characters, numbers from
          0 to 9; which are 10 characters, and a set of special characters which
          are about 33 <br />
          <span className="italic">
            Which are a total of possible 69 characters
          </span>
          So typical each character in a password can be 1 out of 69 values
        </p>

        <ul>
          <li className="list-disc">
            Which means for a 1 character it is 69 ^ n in this case 69 ^ 1 = 69
          </li>
          <li className="list-disc">
            Which means for a 2 character it is 69 ^ 2 = 4761
          </li>
          <li className="list-disc">
            Which means for a 3 character it is 69 ^ 3 = 328, 509
          </li>
          <li className="list-disc">
            Which means for a 4 character it is 69 ^ 4 = 22, 667, 121
          </li>
          <span className="italic font-bold list-decimal">
            These values are the number of operations needed to guess the
            password
          </span>
          <li className="list-disc">
            In general, passwords are limited to around 20 characters, <br />
            So the numbers of operations needed to guess the password in a worse
            case scenario is 69 ^ 20 = 6E36
          </li>{" "}
          <br />
          <span>
            A Computer running on Intel core i5 can only caary out 65 million
            instructions per second, so it will take the computer approximately
            2^20 years to brute force this password;
            <br />
            That is why we should consider space complexity when choosing an
            algorithm{" "}
          </span>{" "}
          <br />
          <span>
            That is why it is recommended you use a longer password, because
            brute force is exponential in the worst case each character you add,
            increases the operations by an exponent
          </span>
        </ul>
      </div>

      <div>
        <h3 className="font-bold py-5 text-center">T</h3>
        <p>
          This Algorithm is best highlighted by a popular problem :- Traveling
          Salesman{" "}
        </p>
        <p>
          Given a list of cities, and the distance between each pair of cities,
          what is the shortest possible route that visits each city, and they
          returns to the origin city
        </p>
        <p className="font-bold underline">Solution:</p>{" "}
        <div>
          <p>Given 3 cities A, B and C</p> <br />
          <span>
            To figure out the shortest route, we have to come up with possible
            routes
          </span>
          <ul>
            <li className="list-disc">A-B-C</li>
            <li className="list-disc">A-C-B</li>
            <li className="list-disc">B-A-C</li>
            <li className="list-disc">B-C-A</li>
            <li className="list-disc">C-A-B</li>
            <li className="list-disc">C-B-A</li>
          </ul>
          <span className="italic font-bold">Which are 6 routes</span>
        </div>
        <br />
        <div>
          <p>Given 4 cities A, B, C and D</p> <br />
          <span>
            To figure out the shortest route, we have to come up with possible
            routes
          </span>
          <ul>
            <li className="list-disc">A-B-C-D</li>
            <li className="list-disc">A-B-D-C</li>

            <li className="list-disc">A-D-B-C</li>
            <li className="list-disc">A-D-C-B</li>

            <li className="list-disc">A-C-B-D</li>
            <li className="list-disc">A-C-D-B</li>

            <li className="list-disc">B-A-C-D</li>
            <li className="list-disc">B-A-D-C</li>

            <li className="list-disc">B-C-A-D</li>
            <li className="list-disc">B-C-D-C</li>

            <li className="list-disc">B-D-A-C</li>
            <li className="list-disc">B-D-C-A</li>

            <li className="list-disc">C-A-B-D</li>
            <li className="list-disc">C-A-D-B</li>

            <li className="list-disc">C-D-A-B</li>
            <li className="list-disc">C-D-B-A</li>

            <li className="list-disc">C-B-A-D</li>
            <li className="list-disc">C-B-D-A</li>

            <li className="list-disc">D-A-B-C</li>
            <li className="list-disc">D-A-C-B</li>

            <li className="list-disc">D-C-A-B</li>
            <li className="list-disc">D-C-B-A</li>

            <li className="list-disc">D-B-A-C</li>
            <li className="list-disc">D-B-C-A</li>
          </ul>
          <span className="italic font-bold">Which are 24 routes</span>
        </div>
        <p>
          The mathematical relationship that explains this is called{" "}
          <strong>factorial, represented by n!</strong>
        </p>
        <p>
          Factorials are basically n(n-1)(n-2) repeated until you reach the
          number 1
        </p>
        <p>
          If n! is 3!, it means 3 X 2 X 1 = 6
          <br />
          <span className="italic">
            Which is the number of combination we got for three cities
          </span>
        </p>
        <p>
          If n! is 4!, it means 4 X 3 X 2 X 1 = 24
          <br />
          <span className="italic">
            Which is the number of combination we got for four cities
          </span>
        </p>
      </div>
      <span>
        In solving the Traveling Salesman problem, the most efficient algorithm
        will have a factorial/ combination runtime or combination runtime And in
        a situation where it is 200!, it was a longer time to solve
      </span>
      <p>Studying exponential algorithms are useful for two reasons</p>
      <ul>
        <li className="list-disc">
          In studying how to make such algorithms efficient, we develop
          strategies that are useful across the board and can be used to make
          existing algorithms even more efficient
        </li>
        <li className="list-disc">
          It is important to be aware of problems that take a long time to
          solve, knowing the problem is somewhat unsolveable in a realistic
          time, so you can focus your attention to other aspects of the problem
        </li>
      </ul>

      <div>
        <h3 className="underline justify-center">
          How to determine the complexity of an algorithm
        </h3>
      </div>
    </div>
  );
}
