"use strict";

const debounce = (fn, ms) => {
  let timer ;

  return (...args) => {
    clearInterval(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

const fn = () => console.log("TEST");
const debounceFn = debounce(fn, 1000);

debounceFn();

setTimeout(() => debounceFn(), 600);
setTimeout(() => debounceFn(), 1200);
setTimeout(() => debounceFn(), 2300);