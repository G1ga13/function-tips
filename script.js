add = (a, b) => {    
    return  console.log( a + b );
}

add(1, 3)

let difference = function (a, b) {
    if (a > b) {
        console.log(a - b);
        
    } else if (b > a) {
        console.log(b - a);  
    }
    return
}

difference(5, 10)

 isEven = (num) => {
     return console.log(num % 2 === 0);
}
  
isEven(10)

function calculator(a, b, callback) {
    return callback(a, b);
}

function multiply(a, b) {
    return a * b;
}

console.log(
    calculator(10, 10, multiply)
);


positive = (num1) => {
  if (num1 > 0) {
    return console.log("რიცხვი დადებითია");
  } else {
    console.log("რიცხვი უარყოფითია"); 
  }
}

positive(10)

let rise = function (num) {
    return console.log(num * 2);
}

rise(30)

function rise2(num, callback) {
 return  callback(num)
}

function answer(num) {
   console.log(num * 2);
}

rise2(50, answer)

 isDivisibleByThree = (num) => {
 if (num % 3 === 0) {
    return console.log("რიცხვი იყოფა სამზე");
 } else {
    console.log("რიცხვი არ იყოფა სამზე");
 }
}

isDivisibleByThree(6)

function Even(num, callback) {
    return callback(num)
}

function evenAnswer(num) {
   if (num % 2 === 0) {
    return console.log("რიცხვი ლუწია");
   } else {console.log("რიცხვი კენტია");
   }
   
   
   
}

Even(2, evenAnswer)

cube = (num) => { console.log(num * num * num); }

cube(5)


function multiply2(num1, num2, callback) {    
    return callback(num1, num2)
}

function multiplyAnswer(num1, num2) {
    return num1 * num2
}

console.log(multiply2(2, 10,multiply));





isGreaterThanZero = (num) => {
    if (num > 0) {
    return  console.log("რიცხვი ნულზე მეტია");
    } else {
        console.log("რიცხვი ნულზე ნაკლებია");
    }
}

isGreaterThanZero(1)

const half = function (num) {
    return console.log(num / 2);
}

half(10)

function plus(num1, num2, callback) {
    return callback(num1, num2)
}

function plusAnswer(num1, num2) {
    return num1 + num2
}

console.log(plus(2, 5, plusAnswer));
 