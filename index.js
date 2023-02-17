function printname(firstName , lastName){
  console.log("My name is " + firstName +" " + lastName);
}

function printVolumeCone(height , radius){
  let result = (1/3) * 3.14 * (radius**2) * height
  console.log("Объем конуса равен " + result );
}

function printLengthStr (str){
  console.log(" Длина строки равна  " + str.length);
}

function evenOrOdd (number){
  if (number % 2 === 0 ){
    console.log(number + " число - четное");
  }
  else {
    console.log(number + " число - не четное");
  }
}

function getSquareNumber (number) {
  return "Квадрат этого числа равен  " + number ** 2;
}

function getRootOfANumber(number) {
  return "Корень этого числа равен  " + number ** (1/2);
}

function getPerimetrPentagon (a , b , c  , d , e) {
  let result =  a + b + c + d + e;
  return "Периметр пятиугольника равен " + result; 
}

for (let i = 0; i <= 33; i+=3) {
  console.log(i);
}

total = 1;
for (let i = 1; i <= 8; i++) {
  total = total * i
}  
console.log( "8! = " + total);

square = 1;
for (let i = 1; i <= 10; i++) {
  square = i ** 2;
  console.log( square);
}  

total = 1;
for (let i = 1; i <= 25; i++) {
  total = total + i
}  
console.log( total);


for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0 ) {
    console.log(i);
  }
}

for (let i = 1; i <= 15; i++) {
  if (i % 2 ==! 0 ) {
    console.log(i);
  }
}


let str = ["apple", "strawberry","pineapple"];
str.unshift("music", "ice");
str.push("dog" , "car", "bird");

let num = [2, 3, 4, 5 , 6, 8, 78];
total = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0){
    total += num[i];
  }
}  
console.log( total);

let string =  ["I", "like", "to", "eat!"];
let sentence =  myArrayy.join(" ");
console.log(sentence);
