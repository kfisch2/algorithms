// var r = /hello/

// r.test();

// r.match();

let s = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

//find SUM of numbers between two INT
// function getSum(a, b) {
//   if (a > b) {
//     let count = a;
//     while (a > b) {
//       count = count + a - 1;
//       a = a - 1;
//     }
//     console.log(count);
//   } else if (b > a) {
//     let count = b;
//     while (b > a) {
//       count = count + a - 1;
//       b = b - 1;
//     }
//     console.log(count);
//   } else {
//     console.log(0);
//   }
// }

// getSum(9, 2);

// function removeSmallest(numbers) {
//   let lowest;
//   let i = 0;
//   while (i < numbers.length) {
//     for (j = 0; i < numbers.length; j++) {
//       if (numbers[i] < numbers[j + 1]) {
//         lowest = numbers[i];
//       } else {
//         lowest = numbers[j + 1];
//       }
//     }
//   }
//   console.log(lowest)
// }
// removeSmallest([1, 4, 2, 5, 6, 7]);

// function countBy(x, n) {
//   let z = [];
//   for (i = 1; i <= n; i++) {
//     z.push(x * i);

//   }
//   console.log(z)
// }

// countBy(2,5);

// function sumTwo(numbers) {
//   numbers.sort(function (a, b) {
//     return a - b;
//   });
//   console.log(numbers);
// }

// sumTwo([12, 3, 4, 5, 7]);

// function minMax(arr) {
//   console.log([Math.min(...arr), Math.max(...arr)])
// };
// minMax([3, 54, 2, 1, 4])

// function getGrade(s1, s2, s3) {
//   let grade;
//   let score = (s1 + s2 + s3) / 3;
//   switch (score) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//   }
//   console.log(grade);
// }

// getGrade(90,90,90);

// function invert(arr) {
//   for (i=0;i<arr.length;i++){
//     arr[i] =  arr[i] * -1
//   }
// }

// invert([1, 3, -3, 3])

//RECURSIVE FUNCTION
// var summation = function (num) {
//   if (num <= 1) {
//     return num;
//   }

//   return num + summation(num - 1);
// };

// console.log(summation(4))

// SOLUTION WASN'T ACCEPTED
// function positiveSum(arr) {
//   if (arr.length > 0) {
//     // filter the positive numbers out of array
//     let newArr = arr.filter((e) => e > 0);
//     // add the positive numbers in the array
//     function getSum(total, num) {
//       return total + num;
//     }

//     console.log(newArr.reduce(getSum));
//   } else {
//     return 0;
//   }
// }

// console.log(positiveSum([]));

// function sumMix(x){
//   let arr = x.map(e=>parseInt(e))
//   function getSum(total, num) {
//     return total + num;
//   }
//   console.log(arr.reduce(getSum))
// }

// sumMix(["3", 2, "4"]);

// function boolToWord(bool){
//   console.log(bool ? 'Yes' : 'No')
// }

// boolToWord(false)

// function repeatStr(n, s) {
//   // let arr = [];
//   // while (n>0){
//   //   arr.push(s);
//   //   n--;
//   // }
//   // console.log(arr.join(''))

//   console.log(s.repeat(n))
// }

// repeatStr(2, "* ")

// function firstNonConsecutive(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] + 1 != arr[i + 1]) {
//       console.log(arr[i + 1]);
//       break;
//     }
//     i = i + 1;
//   }

//   for (i=0;i<arr.length;i++){

//   }
// }
// firstNonConsecutive([1, 2, 4, 5, 3]);

// function findSmallestInt(args) {
//    console.log(Math.min(...args))
// }

// findSmallestInt([0, 3, 4, 5, 6, 1])

// function century(year) {
//   console.log(Math.ceil(year/100) + 'th century')
// }

// century(2430)

// function solution(str, ending){
//   // if (str.substr(str.length - ending.length) === ending) {
//   //   console.log('true')
//   // } else {
//   //   console.log('false')
//   // }

//   // other solution
//   console.log(str.endsWith(ending))
// }

// solution("hello", "lo")
// function digitize(n) {
//   // let arr = n.toString().split('').reverse();
//   // console.log(arr.map(e=>parseInt(e)))

//   // Other solution
//   console.log(String(n).split('').map(Number).reverse());

// }

// digitize(3423)

// function printerError(s) {
//   let count = 0;
//   let arr = s.split("");
//   arr.forEach((e) => {
//     if (/[n-zN-Z]/.test(e)) {
//       count++;
//     }
//   });

//   console.log(`${count}/${s.length}`)
// };

// printerError('abc')

// function getMiddle(s) {
//   let arr = s.split("");
//   let middle;
//   if (arr.length%2 !== 0) {
//     middle = arr[(arr.length - 1) / 2];
//   } else {
//     middle = [arr[(arr.length/2) - 1], arr[arr.length/2]].join('')
//   }

//   console.log(middle.toString())

// }

// getMiddle('dogs')

// sum of numbers without max and min
// function sumArray(array) {
//   let arr = array.sort();
//   arr.pop();
//   arr.shift();

//   const sum = arr.reduce((a, b) => a + b, 0)
//   console.log(sum)
// }

// sumArray([2, 4]);

// function basicOp(operation, val1, val2) {
//   switch (operation) {
//     case "+":
//       return val1 + val2;
//     case "-":
//       return val1 - val2;
//     case "*":
//       return val1 * val2;
//     case "/":
//       return val1 / val2;
//   }
// }

// console.log(basicOp("+", 2, 4))

// function getProduct(x) {
//   console.log(x.reduce((a,b) => a*b))
// }

// getProduct([1, 2, 4])

// var countSheep = function (num) {
//   for (i = 1; i <= num; i++) {
//     let count = "";
//     count.concat(`${i} sheep...`);
//   }
// };

// console.log(countSheep(3));

// var uniqueInOrder = function (iterable) {
//   iterable = iterable.split('');
//   // iterable.filter(e => {
//   //   for (i=0; i<e.length; i++) {
//   //     if (e[i] === e[i+1]) {
//   //       e.splice(i+1);
//   //     }
//   //   }
//   // })
//   console.log(iterable.splice(1))
// };

// uniqueInOrder("aabccddefgh");

// function findOdd(A) {
//   newArr = A.filter((item, index) => A.indexOf(item) != index)
//   console.log(newArr)
//   newArr = newArr.filter((item, index) => newArr.indexOf(item) != index)
//   console.log(newArr)
// }

// findOdd([1, 2, 3, 2, 3, 3, 3])

// function reverseWords(str) {
//   str = str.split(" ");
//   console.log(str);
//   for (i=0; i<str.length;i++){
//     console.log(str[i])
//   }
// }

// reverseWords("hello world");

// SPREADER OPERATOR

// let set = ["apple", "banana"]
// let set2 = ["watermelon"]

// // adds 'cherry' to set
// console.log(...set, "cherry");
// console.log([...set, "cherry"])

// // concatenates elements from set, set2 to newSet
// let newSet = [...set, ...set2]

// //

// console.log(newSet)

// let addThreeNumbers = (x, y, z) => {
//   return x + y + z;
// };

// let arr = [1, 2, 3];
// console.log(addThreeNumbers(...arr));


function SeriesSum(n)
{
  let sum = 1;
  let m = 3;
  while (m <= n) {
    sum = sum + 1/m;
    m = m + 3;
  }
}

console.log(SeriesSum(3))