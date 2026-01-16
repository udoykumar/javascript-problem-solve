// Reverse a String--1
function reverseString(str) {
  return str.split("").reverse().join("");
}

const result = reverseString("hello");
console.log(result);

// Count Vowels in a String--2
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

const result2 = countVowels("programming");
console.log(result2);

// Check for Palindrome--3

function palindrome(str) {
  const reverse = str.split("").reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}
const result3 = palindrome("madam");
console.log(result3);

// Find the Maximum Number--4
function findMax(arr) {
  return Math.max(...arr);
}

const result4 = findMax([5, 1, 9, 3]);
console.log(result4);

// Remove Duplicates from an Array--5
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// Sum of All Numbers in an Array--6
function sum(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(sum([1, 2, 3, 4]));

// Even Numbers in an Array--7
function evenNumbar(nums) {
  return nums.filter((num) => num % 2 === 0);
}
console.log(evenNumbar([1, 2, 3, 4, 5, 6]));

// Capitalize first Letter of Each word --8

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world"));

// Find the Factorial of a Number--9
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// PingPong Challenge--10

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

console.log(pingPong());
