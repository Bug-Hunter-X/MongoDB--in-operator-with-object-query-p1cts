# MongoDB $in operator with object query

This repository demonstrates an uncommon error when using the `$in` operator in MongoDB queries. The error arises from attempting to use an object within the `$in` array instead of an array of values.

## Problem
The provided code uses the `$in` operator with an object instead of an array of values. This leads to an incorrect query and unexpected results.

## Solution
The solution modifies the query to correctly utilize the `$in` operator by providing an array of simple values to match against.  This ensures the query functions as intended.

## How to reproduce
1. Clone the repository.
2. Ensure you have MongoDB and a Node.js environment set up.
3. Run the `bug.js` file to observe the incorrect behavior.
4. Run the `bugSolution.js` file to observe the correct behavior.