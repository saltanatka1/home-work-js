function printname(firstName , lastName){
  console.log("My name is " + firstName +" " + lastName);
}

function printVolumeCone(height , radius){
  let result = (1/3) *3.14 * radius * height
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