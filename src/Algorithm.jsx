import React from "react";
import { Link } from "react-router-dom";

const Algorithm = () => {
  return (
    <div className="container mx-auto py-5 px-10">
      <h1 className="font-bold text-4xl text-center">ALGORITHM</h1>
      <p className="text-center">
        A set of steps or instuctions for completing a task.
      </p>

      <div className="">
        <br />
        <p className="font-bold">Notes:-</p>
        <div className="italic">
          <ul>
            <li className="list-disc">
              Algorithmic thinking is the study of the effective methods that
              can be used to solve a problem.
            </li>

            <li className="list-disc">
              Another part of Algorithmic thinking Clearly define the problem,
              and what values counts as inputs.
            </li>

            <li className="list-disc">Algorithm should produce a result.</li>
            <li className="list-disc">
              Each step in our Algorithm definition needs to be explicit clear.
            </li>
            <li className="list-disc">
              Algorithm should actually complete and not take an infinite amount
              of time
            </li>
            <li className="list-disc">
              For an Algorithm to be an algorithm, it should have a clearly
              defined problem statement, a set of input values, and a set of
              output values.
            </li>
            <li className="list-disc">
              The steps in the algorithm needs to be in a very specific order
            </li>
            <li className="list-disc">The steps also need to be distinct</li>
            <li className="list-disc">
              Consistent result for the same set of values is how we know the
              algorithm is correct
            </li>
          </ul>
        </div>
        <br />
        <div id="Types">
          <h2 className="underline">Keywords </h2>

          <p>
            <strong className="pr-2">
              The worst-case performance of an algorithm
            </strong>
            refers to the scenario in which the algorithm performs the least
            efficiently or takes the maximum amount of time or resources among
            all possible input data.
          </p>
          <p>
            <strong className="pr-2">Efficiency:</strong>
            The two measures of efficiency are Time and Space Complexity.
            <br />
            <span className="italic">
              Time Complexity is the amount of time it takes to run an
              algorithm;
            </span>{" "}
            <br />
            <span className="italic">
              Space Complexity is the amount of memory space required to run an
              algorithm.
            </span>
          </p>
          <p>
            <strong className="pr-2">Linear Search:</strong>
            Is a search algorithm, where we start at the beginning of the list
            or range of values, then we compare the current value to the
            value,and if it is, then we stop otherwise we continue sequentially
            to the next value until we reach end of the list.
          </p>
          <p>
            <strong className="pr-2">Binary Search:</strong>
            Binary search is an efficient algorithm for finding an item from a
            sorted list of items. It works by repeatedly dividing in half the
            portion of the list that could contain the item, until you've
            narrowed down the possible locations to just one.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <Link
          to={"/big-o"}
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          Big O
        </Link>
      </div>
    </div>
  );
};

export default Algorithm;
