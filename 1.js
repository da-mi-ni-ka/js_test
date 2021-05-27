/**
 * Returns the math power function with the specified exponent
 *
 * @param {number} exponent
 * @return {Function}
 *
 * @example
 *   var power2 = getPowerFunction(2); // => x^2
 *   power2(2) => 4
 *   power2(4) => 16
 *
 *   var power05 = getPowerFunction(0.5); // => x^0.5
 *   power05(4) => 2
 *   power05(16) => 4
 *
 */


// function getPowerFunction(exponent) {
//   return (num) => {
//     return Math.pow(num, exponent);
//   };
// };

// const power2 = getPowerFunction(2); // => x^2
// console.log(power2(2));
// console.log(power2(4));

// const power05 = getPowerFunction(0.5); // => x^0.5
// console.log(power05(4));
// console.log(power05(16));


const getPowerFunction = exponent => num => Math.pow(num, exponent);

const power2 = getPowerFunction(2);
console.log(power2(2));
console.log(power2(4));

const power05 = getPowerFunction(0.5); 
console.log(power05(4));
console.log(power05(16));