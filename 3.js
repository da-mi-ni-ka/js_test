// setInterval(() => {
//   const date = new Date();
//   let hh = date.getHours();
//   if(hh < 10) {
//     hh = "0" + hh;
//   };
//   let mm = date.getMinutes();
//   if(mm < 10) {
//     mm = "0" + mm;
//   };
//   let ss = date.getSeconds();
//   if(ss < 10) {
//     ss = "0" + ss;
//   };
// console.log(`${hh}:${mm}:${ss}`)
// }, 1000);


setInterval(() => {
  const date = new Date();
  const output = [date.getHours(), date.getMinutes(), date.getSeconds()]
  .map(num => num < 10 ? "0" + num : num)
  .join(":");
  console.log(output);
}, 1000);
