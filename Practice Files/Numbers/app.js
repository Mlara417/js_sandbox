const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI; //3.14
val = Math.E; //2.71
val = Math.round(2.4);
val = Math.ceil(2.4); //round up
val = Math.floor(2.8); //round down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3,-2);//returns min
val = Math.max(2,33,4,1,55,6,3,-2);//returns max
val = Math.random();//random decimal

val = Math.floor(Math.random() * 20 + 1); //random number between 1 and 20 w/out decimals

console.log(val);