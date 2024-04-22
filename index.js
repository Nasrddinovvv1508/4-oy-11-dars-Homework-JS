// 1-MASALA
// let n = 5;

// function getInitialOdds(n) {
//     let arr = [];
//     for (let i = 1; arr.length < n; i+=2) {
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(getInitialOdds(n));


// 2-MASALA
// let arr = [1, 2, 3, 4, 5];

// function getEvenReverse(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr.reverse();
// }

// console.log(getEvenReverse(arr));



// 3-MASALA
// let arr = [4, 5, 7, 8, 6, 9];
// let res = '';

// for (let i = 0; i <= arr.length; i++) {
//     if (i == 0) {
//         res += ` ${arr[i]}`;
//     } else if(i == arr.length) {
//         res += ` ${arr[arr.length - i]}`;
//     }
//      else {
//         res += ` ${arr[arr.length - i]} ${arr[i]}`;   
//     }
// }

// console.log(res);


// 4-MASALA
// let arr = [1, 6, 9, 5, 8, 10, 15];

// function rangeSum(arr, k, l) {
//     let sum = 0
//     for (let i = k; i <= l; i++) {
//         sum += arr[i]
//     }

//     return sum;
// }

// console.log(rangeSum(arr, 2, 5));


// 5-MASALA
// let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// function getSingleArr(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         } 
//     }

//     return newArr
// }

// console.log(getSingleArr(arr));


// 6-MASALA
// let arr = [1, 2, 13, 4, 5, -4];
// let big = arr[0];
// let small = arr[0];

// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > big) {
//         big = arr[i]
//     } else if (arr[i] < small) {
//         small = arr[i]
//     }
// }

// let bigIndex = arr.indexOf(big);
// let smallIndex = arr.indexOf(small);

// arr[bigIndex] = small;
// arr[smallIndex] = big;

// console.log(arr);


// 7-MASALA
// let arr = [1, 5, 8, 9, 10];

// let newArr = [0];

// for (let i = 0; i <= arr.length; i++) {
//     if (i == arr.length - 1) {
//         newArr[0] = arr[arr.length - 1]
//     } else {
//         newArr[i + 1] = arr[i];
//     }

// }

// console.log(newArr);



// UY ISHI - 1-masala
// let n = 5;

// function getLevel2(n) {
//     if (!isNaN(n)) {
//         let arr = []
//         for (let i = 1; i <= n; i++) {
//             arr.push(Math.pow(2, i))
//         }

//         return arr;
//     } else {
//         return false;
//     }
// }

// console.log(getLevel2(n));


// UY ISHI - 2-masala
// let n = 5;
// let a = 2;
// let b = 3;

// function predecessorsSum(n, A, B) {
//         if (!isNaN(n) && !isNaN(A) && !isNaN(B)) {
//                 let arr = [A, B]
//                 let sum = 0
//                 for (let i = 1; i < n - 1; i++) {
//                         sum = 0
//                         for (let j = 0; j < arr.length; j++) {
//                                 sum += arr[j];
//                         }

//                         arr.push(sum)
//                 }

//                 return arr;
//         } else {
//                 return `Error`;
//         }
// }

// console.log(predecessorsSum(n, a, b));


// UY ISHI - 3-masala
// let n = 5;
// let arr = []

// for (let i = 1; i <= n; i++) {
//         arr.push(i)
// }

// function reverseArr(arr) {
// //       /*1*/ arr.reverse();
// //       return arr;

// //      /*2*/ let newArr = []
//         // for (let i = arr.length - 1; i >= 0; i--) {
//         //         newArr.push(arr[i]);
//         // }
//         // return newArr
// }

// console.log(reverseArr(arr));


// UY ISHI - 4-masala
// let arr = [4, 5, 7, 8`, 6, 9];
// let res = ``;
// let counter = 0

// for (let i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 == 1) {
//         res += ` ${arr[i]}`
//         counter++
//      }
// }

// console.log(`Toq elementlar -${res}, jami ${counter} ta`);`



// UY ISHI - 5-masala
// let arr = [4, 5, 7, 8, 6, 9]
// if (Array.isArray(arr)) {
//         if (arr.length == 0) {
//                 console.log(`Error`);
//                 return;
//         }

//         let odd = ``;
//         let even = ``;

//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] % 2 == 1) {
//                         odd += ` ${arr[i]}`;
//                 }

//                 if (arr[i] % 2 == 0) {
//                         even += ` ${arr[i]}`;
//                 }
//         }

//         console.log(even, ` `, odd.split('').reverse().join(``));
// } else {
//         console.log(`Error`);
// }



// UY ISHI - 6-masala
// let n = 6;
// let array = []

// if (!isNaN(n)) {
//         for (let i = 1; i <= n; i++) {
//                 array.push(i);
//                 // [1, 2, 3, 4, 5, 6]
//         }
// } else {
//         console.log(`Error`);
// }

// console.log(array);

// let res = ``
// if (array.length) {
//         for (let j = 0; j < array.length; j+=2) {
//                 res += ` ${array[j]}`;
//         }
// } else {
//         console.log(`error`);
// }

// console.log(res);



// UY ISHI - 7-masala
// let n = 6;
// let array = [];

// if (!isNaN(n)) {
//         for (let i = 1; i <= n; i++) {
//                 array.push(i)
//                 // [ 1, 2, 3, 4, 5, 6 ]
//         }
// } else {
//         console.log(`error`);
// }

// let res = ``
// if (array.length) {
//         for (let i = 1; i < array.length; i += 2) {
//                 res += ` ${array[n - i]}`;
//         }

//         console.log(res.trim());
// } else {
//         console.log(`Error`);
// }



// UY ISHI - 8-masala
// let n = 6
// let array = [];

// if (!isNaN(n)) {
//         for (let i = 1; i <= n; i++) {
//                 array.push(i)
//                 // [1, 2, 3, 4, 5, 6]
//         }
// } else {
//         console.log(`error`);
// }

// let odd = ``;
// let even = ``;

// if (array.length) {
//         for (let i = 0; i < array.length; i+=2) {
//                 even += ` ${array[i]}`;
//         }

//         for (let i = 1; i < array.length; i+=2) {
//                 odd += ` ${array[i]}`;
//         }
// } else {
//         console.log(`error`);
// }

// console.log(even, odd);



// UY ISHI - 9-masala
// let n = 6;
// let array = [1, 2, 3, 4, 5, 6];
// let odd = ``;
// let even = ``;

// if (Array.isArray(array) && array.length) {
//         for (let i = 1; i < array.length; i += 2) {
//                 odd += ` ${array[i]},`;
//         }

//         for (let i = 0; i < array.length; i += 2) {
//                 even += ` ${array[i]},`;
//         }

//         console.log(odd.trim());
//         console.log(even.trim().split(' ').reverse().join(' '));
// } else {
//         console.log(`error`);
// }



// UY ISHI - 10-masala
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length
// let newArr = []

// let start = 0
// let end = n - 1;

// while (start <= end) {
//         if (start == end) {
//                 newArr.push(arr[start]);
//         } else {
//                 newArr.push(arr[start]);
//                 newArr.push(arr[end]);
//         }

//         start += 1;
//         end -= 1;
// }

// console.log(newArr);


// function rearrangeArray(arr) {
//         const n = arr.length; 
//         const result = []; 

//         let left = 0;
//         let right = n - 1; 

//         while (left <= right) {
//             result.push(arr[left]);
//             left += 1;

//             if (left <= right) {
//                 result.push(arr[right]);
//                 right -= 1;
//             }
//         }

//         return result;
//     }

//     const arr = [1, 2, 3, 4, 5, 6, 7];

//     const rearranged = rearrangeArray(arr);

//     console.log(rearranged);



// UY ISHI - 11-masala
// let n = 6;
// let arr = [1, 2, 3, 4, 5, 6];

// function rangeOutSum(arr, K, L) {
//         let sum = 0;
//         for (let i = K; i <= L; i++) {
//                 sum += arr[i];
//         }

//         return sum;
// }

// console.log(rangeOutSum(arr, 2, 4));



// UY ISHI - 12-masala
// let arr = [10, false, ``, `Abdulaziz`, null];
// let truthy = []
// let falsy = []

// for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//                 truthy.push(arr[i])
//         } else {
//                 falsy.push(arr[i])
//         }
// }

// console.log(truthy);
// console.log(falsy);



// UY ISHI - 13-masala
// let n = 6;
// let arr = [1, 2, 3, -8, 5, 6];

// function getOddMin(arr) {
//         let min = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//                 if (i % 2 == 0) {
//                         if (arr[i] < min) {
//                                 min = arr[i]
//                         }
//                 }
//         }

//         return min;
// }

// console.log(getOddMin(arr));



// UY ISHI - 14-masala 
// let n = 6;
// let arr = [1, 2, 3, 4, 5, 6];

// function getEvenMax(arr) {
//         let max = arr[0];
//         for (let i = 0; i < arr.length; i++) {
//                 if (i % 2 == 1) {
//                         if (arr[i] > max) {
//                                 max = arr[i];
//                         }
//                 }
//         }

//         return max;
// }

// console.log(getEvenMax(arr));



// UY ISHI - 15-masala 
// let arr = [1, 2, 3, 4, 1, 5, 9, 7];
// let lMax = arr[0]

// for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
//                 lMax = arr[i]
//         }
// }

// console.log(lMax);



// UY ISHI - 16-masala 
// let arr = [1, 2, 3, 7, 5, 6];
// let R = 4;
// let near = arr[0];
// let minDifference = Math.abs(arr[0] - R);

// for (let i = 0; i < arr.length; i++) {
//         let difference = Math.abs(arr[i] - R)

//         if (difference < minDifference) {
//                 near = arr[i];
//                 minDifference = difference;
//         }
// }

// console.log(near);



// UY ISHI - 17-masala 
// let n = 6;
// let arr = [1, 2, 3, 4, 5, 6];

// let res = arr[0] + arr[1];
// let couple;

// for (let i = 1; i < arr.length; i++) {
//         if ((arr[i] + arr[i+1] > res)) {
//                 res = (arr[i] + arr[i+1])
//                 couple = `${arr[i]}, ${arr[i+1]}`
//         }
// }

// console.log(res);
// console.log(couple);



// UY ISHI - 18-masala
// let arr = [1, 2, 4, 4, 5, 3];
// let res = ``
// let counter = 0

// for (let i = 0; i < arr.length; i++) {
//         counter = 0
//         for (let j = 0; j < arr.length; j++) {
//                 if (arr[i] == arr[j]) {
//                         counter++;
//                 }
//         }

//         if (counter == 2) {
//                 res += ` ${i}`;
//         }
// }

// console.log(res.trim());



// UY ISHI - 19-masala
// let n = 6;
// let arr = [1, 2, 3, 2, 2, 3];
// let counter = 0;
// let max = 0;
// let res = ``;

// for (let i = 0; i < arr.length; i++) {
//         counter = 0
//         for (let j = 0; j < arr.length; j++) {
//                 if (arr[i] == arr[j]) {
//                         counter++
//                         res = ` ${arr[i]}`
//                 }
//         }

//         if (counter > max) {
//                 max = counter;
//         }
// }
// console.log(`${res.trim()} jami ${max} marta takrorlanyapti`);