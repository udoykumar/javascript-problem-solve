const numbers = [4, 8, 2, 3, 5];
// const double = [];

// for (const num of numbers) {
//   const result = num * 2;
//   double.push(result);
// }

const doubleIt = numbers.map((num) => {
  const result = num * 2;
  return result;
});
const double = numbers.map((x) => x * 2);
console.log("single line map", double);
console.log("map", doubleIt);

const friend = ["zaved", "pavel", "nobel", "kodbel"];
// const nameLength = friend.map((name) => name.length);
const nameLength = friend.map((name) => name[1].toUpperCase());
console.log("name length", nameLength);
