/**
 * Returns the functions composition of two specified functions f(x) and g(x).
 * The result of compose is to be a function of one argument, (lets call the argument x),
 * which works like applying function f to the result of applying function g to x, i.e.
 *  getComposition(f,g)(x) = f(g(x))
 *
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 *
 * @example
 *   getComposition(Math.sin, Math.asin)(x) => Math.sin(Math.acos(x))
 *
 */

 // function getComposition(f,g) {
//   return (x) => {
//     return f(g(x));
//   }
// }
// const composedFns = getComposition(Math.sin, Math.asin);

// console.log(composedFns(5) === Math.sin(Math.acos(5)));




// const compose = (...functions) => (...args) => {
//   const initialValue = functions.pop()(...args);
//   return functions.reduceRight((result, func) => func(result), initialValue);
// };
function compose(...functions) {
  return (...args) => {
    const initialValue = functions.pop()(...args);
    return functions
    .reverse()
    .reduce((result, func) => {
      return func(result);
    }, initialValue);
  };
};
const composedFns = compose(x => x * 2, x => x + 1, (x, y) => x * y);
console.log(composedFns(2, 3));