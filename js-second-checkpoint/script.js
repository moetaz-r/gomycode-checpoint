// String Manipulation Functions:
// FIRST TASK 

// const str = prompt("Enter your sentence : ");

// let result = "";


// const reverse = (str) => {
//     for (let index = str.length - 1 ; index >= 0; index--) {
//         result += str[index];
//     }
//     return result;
// }

// console.log(reverse(str));





// SECOND TASK 


// const str = prompt("Enter your sentence : ");


// const getLength = (str) => {

//     let result = 0;

//     for (let index = 0; index < str.length; index++) {

//         result++
//     }
//     return result;
// }

//     console.log(getLength(str))






//THIRD TASK

// const str = prompt("Enter your sentence : ");

// const capitalizeWords = (str) => {
//     let upper = "";

//     for (let index = 0; index < str.length; index++) {

//         if( index === 0 || str[index - 1] === " "){
//             upper += str[index].toUpperCase();
//         }else{
//             upper += str[index];
//         }
//     }
//     return upper;
// }

// console.log(capitalizeWords(str))












// Array Functions:

// FIRST TASK

// const N = Number(prompt("Enter the Array size : "));
// const arr = [];

// for (let index = 0; index < N; index++) {
//     arr.push(Number(prompt("Enter the " + (index + 1) + " element : ")));
// }

// const maxArray = (arr) => {
//     let max = arr[0];

//     for (let index = 1; index < arr.length; index++) {
//         if ( max < arr[index] ) {
//             max = arr[index];
//         }else{
//             continue;
//         }
//     }
//     return max;
// }



// const minArray = (arr) => {
//     let min = arr[0];

//     for (let index = 1; index < arr.length; index++) {
//         if ( min > arr[index] ) {
//             min = arr[index];
//         }else{
//             continue;
//         }
//     }
//     return min;
// }



// console.log("Minimum value: " + minArray(arr));
// console.log("Maximum value: " + maxArray(arr));






// SECOND TASK

// const N = Number(prompt("Enter the Array size : "));
// const arr = [];  

// for (let index = 0; index < N; index++) {
//     arr.push(Number(prompt("Enter the " + (index + 1) + " element : ")));
// }


// const sumArray = (arr) => {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];
//     }
//     return sum;
// }

// console.log("Sum of the array: " + sumArray(arr));






// THIRD TASK


// const filterArray = (arr, condition) => {
//     return arr.filter(condition);
// };












// Mathematical Functions:

// FIRST TASK

// const N = Number(prompt("Enter your number : "));


// const factorial = (N) => {

//     for (let index = N - 1; index > 0; index--) {
//         N *= index;
//     }
//     return N;
// }

// console.log(factorial(N))






// SECOND TASK


// const num = Number(prompt("Enter your number : "));

// const isPrime = (num) => {
//     if (num <= 1) return false;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return false;
//     }

//     return true;
// };

// console.log(isPrime(num))




// THIRD TASK

// const num = Number(prompt("Enter your number : "));

// const fibonacci = (num) => {
//     const result = [0, 1];

//     for (let i = 2; i < num; i++) {
//         result[i] = result[i - 1] + result[i - 2];
//     }

//     return result;
// };

// console.log(fibonacci(num));