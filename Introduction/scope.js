// Block Scope
if (true) {
    var name = 'Kimu';
    let  likes = 'Coding';  
    const skills = 'JavaScript and HTML'; 
  
  }

//   console.log(name);
//   console.log(likes);
//   console.log(skills); 

//   Function Scope
function myFunction() {
    var book="5 am Club";
    let car="Benz";
    const food="Pizza";
    console.log(book,car,food);
  }

// myFunction();
//   console.log(book);
//   console.log(car);
//   console.log(food);

// Global Scope

var name = 'Kimu';
let likes = 'Coding';
const skills = 'JavaScript and HTML';

function myFunction2() {
    console.log(name,likes,skills);
    }


// myFunction2();

// console.log(name);

// // Using loops

for (var i = 0; i < 10; i++) {
    console.log(skills)
    console.log(likes);
    console.log(i);
  }


// When a variable is in the global scope, it can be accessed anywhere in the code, in the functions, classes
// and loops.

// You can only access a varibale inside a loop covered inside {}, only when it is declared using var.


// console(kite);

let kite;
kite="Coool Kite!"

console.log(kite)


