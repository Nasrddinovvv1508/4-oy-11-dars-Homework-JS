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
//      let arr = [A, B]
//      let sum = 0
//      for (let i = 1; i < n-1; i++) {
//         sum = 0
//         for (let j = 0; j < arr.length; j++) {
//              sum += arr[j];
//         }

//         arr.push(sum)
//      }

//      console.log(arr);
// }

// predecessorsSum(n, a, b)