/*  Loops in Javascript.
Loops are used to execute a block of code repeatedly.

Types of loops in Javascript.

For loop
While loop
Do while loop
*/

/*
# For loop
For loop is used to execute a block of code repeatedly until a certain condition is met.

Syntax:

for(initialization; condition; increment/decrement){
    //code to be executed
}
*/

// Example:

for(let i = 0; i < 10; i++){
    console.log(i)
}

/*
 # While loop
While loop is used to execute a block of code repeatedly until a certain condition is met.

Syntax:

while(condition){
    //code to be executed
}
*/

// Example:

let k = 0
while(k < 10){
    console.log(k)
    k++
}


/* 
Do while loop

Do while loop is used to execute a block of code repeatedly until a certain condition is met.

Syntax:

do{
    --code to be executed
}while(condition)
*/
// Example:


let j = 0

do{
    console.log(j)
    j++
}while(j < 10)

// -------------------------------------
/* Practice Excersise

-Do while loop
Write a program that prints all even numbers from 1 to 20 using a do while loop.

--For Loop
Write a program that calculates and prints the sum of numbers from 1 to 10 using a for loop.


-While loop
Write a program that prints out numbers upto 50

*/

// Break and continue in Javascrip loops.

let i=0
for (i=0;i<=10;i++){
    console.log(i)
    if (i===5){
        break //Exists the loops prematurely when it reaches 5!
    }
}

// Continue 

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
      continue; // Skip the current iteration when i equals 3
    }
    console.log(i);
  }
  



