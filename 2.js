// Creates an array of integers from the specified start to end (inclusive)

// @param {number} start
// @param {number} end
// @return {array}

// @example
// 1, 5  => [ 1, 2, 3, 4, 5 ]
// -2, 2  => [ -2, -1, 0, 1, 2 ]
//  0, 100 => [ 0, 1, 2, ..., 100 ]
// 3, 3   => [ 3 ]

function getIntervalArray(start, end) {
  const arr = new Array(end - start +1);
  return Array.from(arr, (el, id) => {
    return id + start;
  });
};

console.log(getIntervalArray(1, 5));
console.log(getIntervalArray(-2, 2));