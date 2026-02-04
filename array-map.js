const numbers = [4, 8, 2, 3, 5];
const double = [];

// for (const num of numbers) {
//   const result = num * 2;
//   double.push(result);
// }

numbers.map((num) => {
  const result = num * 2;
  double.push(result);
});
console.log(double);
