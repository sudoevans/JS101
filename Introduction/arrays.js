// Arrays in Javascript

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// console.log(arr)

// Lenght of an array
// console.log(arr.length)

//accessing an array
/* Array are just like items in a list. They are accessed using indexes.
 starting with zero as the first index. */

// console.log(arr[0]) //first element.

// Accessing the last element of an array
// console.log(arr[arr.length-1])

console.log(arr.length)


// Mutating an array -
arr[0] = 10
// console.log(arr)


let cars=["dodge","mustang","audi","benz"] 

console.log(cars.pop())
console.log(cars)



/* Array methods -
 Push,Pop,Shift
-Push: Adds an element to the end of an array

*/

cars.push("toyota")
console.log(cars)

// Pop: Removes the last element of an array
cars.pop()
console.log(cars)

// Shift: Removes the first element of an array
cars.shift()
console.log(cars)

// Unshift: Adds an element to the beginning of an array
cars.unshift("toyota")
console.log(cars)

// Other array concepts.
