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

// Wi-Fi password brute force simulation using a do while loop in javascript.

// Using a list
let passwordList=['12345568','Snave123','ki38sjw','3hwi738234','883jwjww','cybercafe','2015231'];
let correctPassword='cybercafe';

let r=0

console.log(passwordList[0])
do {
    console.log( "Trying"+passwordList[r])
    r++

}while(passwordList[r]!==correctPassword)

