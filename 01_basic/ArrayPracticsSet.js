
// 1. Create an array of 5 fruits and print the second fruit.
// let fruits = ["Apple","Banana","Mango","Orange","Grapes"];
// console.log(fruits[1]);

// 2. Find the length of an array numbers = [10,20,30,40,50].
// let num = [10,20,30,40,50];

// console.log(num.length)

// 3. Add "Mango" at the end of array fruits = ["Apple","Banana"].
// let fruit = ["Apple","Banana"];

// fruit.push("Mango");
// console.log(fruit);



// 4. Remove the first element from an array colors = ["Red","Green","Blue"].

// let colors = ["Red","Green","Blue"];
// colors.unshift();
// console.log(colors);


// 5. Merge two arrays: [1,2] and [3,4].
// let arr1 = [1,2];
// let arr2 = [3,4];



// 6. Convert array ["A","B","C"] into a string separated by -.


// 7. Check if "Banana" exists in array ["Apple","Banana","Mango"].


// 8. Print each element of array [5,10,15] using a for...of loop.

// let arr = [5,10,15];
// for (let value of arr) {
//     console.log(value);
    
// }

// 9. Print the index of "Orange" from ["Apple","Orange","Grapes"].
//  let f = ["Apple","Orange","Grapes"];
//  console.log(f.indexOf("Orange"));

// 10. Extract ["Banana","Mango"] from ["Apple","Banana","Mango","Orange"] using slice().

// let fruit = ["Apple","Banana","Mango","Orange"];
// fruit.slice("Banana","Mango");
// console.log(fruit);



// 🟡 Medium Level (Methods & Transformation)

// 1. Double every number in [1,2,3,4] using map().
// let num = [1,2,3,4];
// num.map(n => n*2);
// console.log(num.map(n => n*2));

// 2. Filter out even numbers from [1,2,3,4,5,6].
// let num1 = [1,2,3,4,5,6];
// num1.filter(n => n%2 === 0);
// console.log(num1.filter(n => n%2 === 0));

// 3. Find the sum of [5,10,15,20] using reduce().
// let num2 = [5,10,15,20];
// num2.reduce();
// console.log(num2.reduce((a,b) => a+b));

// 4. Check if all numbers in [10,20,30,40] are greater than 5 using every().
// let num3 = [10,20,30,40];
// num3.every(n => n > 5);
// console.log(num3.every(n => n > 5));

// 5. Check if any number is less than 0 in [1,2,-3,4] using some().
// let num4 = [1,2,-3,4];
// num4.every(n => n < 0);
// console.log(num4.some(n => n < 0));

// 6. Find the first number greater than 50 in [10,25,60,80].


// 7. Find the index of "Banana" in ["Apple","Banana","Mango"].

// let arr = ["Apple","Banana","Mango"];
// console.log(arr.indexOf("Banana"));

// 8. Sort the array [40,100,1,5,25] in ascending order.

// let num = [40,100,1,5,25];
// console.log(num.sort((a,b) => a-b));

// 9. Reverse the array ["One","Two","Three"].
// let re = ["One","Two","Three"];
// console.log(re.reverse());

// 10. Convert string "hello" into an array of characters using Array.from()

// let arr1 = ["Hello","world"];
// console.log(arr1.form("Hello"));

// 🔴 Hard Level (Advanced & Real Use)

// 1. Flatten the nested array [1,[2,[3,[4]]]] into [1,2,3,4].
// let nums = [1,[2,[3,[4]]]];
// console.log(nums.flat(3));

// 2. Create a 2D array matrix = [[1,2,3],[4,5,6],[7,8,9]] and print 5.
// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(matrix[1][1]);

// 3. Use destructuring to extract the first two elements from [100,200,300,400].


// 4. Merge two arrays [1,2] and [3,4] using spread operator.


// 5. Collect the rest of the numbers from [10,20,30,40,50] into a new array after the first two elements.


// 6. From array of objects

// let users = [
//   {id:1,name:"Aman"},
//   {id:2,name:"Neha"},
//   {id:3,name:"Raj"}
// ];

// → Extract only the names in a new array.


// 7. Given an array [1,2,3], use flatMap() to make [1,2,2,4,3,6].


// 8. Copy elements in [1,2,3,4,5] using copyWithin() to get [3,4,5,4,5].


// 9. Write a function that takes an array of numbers and returns the maximum number.


// 10. Write a function that takes an array of strings and returns a new array with only strings longer than 4 characters.
// 11.