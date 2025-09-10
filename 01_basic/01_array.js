// Creating Array in java scripts
// let fruits = ["Apple","Banana","Mango","Orange"]
// console.log(fruits)
// // print element using index
// console.log(fruits[0]) //Apple
// console.log(fruits[1]) //Banana
// console.log(fruits[2]) //Mango
// console.log(fruits[3]) //Orange
// console.log(fruits.length)  //print length of array

//<............Array traversal ...................>
// let arr = [4,5,8,68,75,6]

// console.log("using for loop")
// for(let i = 0; i < arr.length; i++){  // using for loop
//     console.log(arr[i])
// }


// console.log("using for ... of loop")
// for(let value of arr){ // using for ... of loop
//     console.log(value)
// }


// console.log("using forEach loop")
// arr.forEach(val => console.log(val))   // using forEach loop

// <..................Bsic Array methods................>
// arr.push(90)   // array ke end me element ko add karta hai
// console.log(arr)
// arr.pop()   //array ke end se element ko delete  karta hai 
// console.log(arr)
// arr.unshift(3)  //array ke shuru me element ko add karta hai
// console.log(arr)
// arr.shift()  //array ke shuru se me element ko delete karta hai
// console.log(arr)


// <......................Searching element in Array.apply.............>

// let arr = [20,30,40,50,60,70,80,90]

// console.log(arr.indexOf(50)) // jis index pe element match hoga wo index print hoga 50 find yani index 3 print hoga

// console.log(arr.indexOf(100)) // agar arr me element match nahi hoga to -1 print hoga


// <.......................... Slice and Splice Array .apply..................>
// let arr = ["a","b","c","d","e"]

// // arr.slice(2,5)

// console.log(arr.slice(2,5)) //arr ka element 2 index no. se index no. 4 tak print hoga

// arr.splice(1,2,"x","y")  ////arr ka element  index no. 1 pe "x" ko or index no. 2 pe "y" ko add kar dega
// console.log(arr)

// <...................Transformatting Arrays..............................>

// let num = [2,4,6,8]
// console.log(num.map(n => n*2))  // arr ke all element ko 2 se multiple kar dega
// console.log(num.filter(n => n % 2 === 0)) // arr ke all element ko 2 se divide  kar dega
// console.log(num.reduce((a , b) => a + b))   // arr ke all element ko add kar   dega


// <..............................Sorting and Reversing Array .................>

// let num = [25,94,34,10,69,82]

// console.log(num.sort()); // array ko sort kar dega yahi assendig order me kar dega

// console.log(num.reverse()); // array ko reverse kar dega yani first element last and last element ko first kar dega


// <..............................Floating Array .................>

// let arr = [1,[2,[3,[4]]]]

// console.log(arr.flat(3)) //nested arrays ko single array me convert karta hai