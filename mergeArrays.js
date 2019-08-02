/**
 We've made a mistake, our researchers had already sorted the arrays for us, from least liked to most 
 liked—but our concat function didn't take this into account. 
 We'll need to create a new function that keeps our data sorted.

Challenge

Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers
from both lists.

For example:

code	output
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]
 */

function merge(array1, array2){
  var finalArray = array1.concat(array2);
  finalArray.sort();
  return finalArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);