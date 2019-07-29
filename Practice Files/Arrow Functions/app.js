/* 
Normal way
const sayHello = function() {
    console.log('Hello, normal');
} 
*/

/* 
arrow function
const sayHello = () => {
    console.log('Hello, arrow');
}
 */

/*  //One line function does not need braces
const sayHello = () =>  console.log('Hello, arrow one line '); */

/* //One Line return
const sayHello = () => 'Hello'; */

/* //Same as above
const sayHello = function() {
    return 'Hello';
}  */

/* //Single parameter does not need parenthesis
const sayHello = name => console.log(`Hello ${name}`); */

/* //Multiple parameters need parenthesis
const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

sayHello('Moses', 'Lara'); */

const users = ['Nathan', 'John', 'William'];

/* const nameLengths = users.map(function(name){
    return name.length;
}); */

/* //Shorter
const nameLengths = users.map((name) => {
    return name.length;
}); */

//Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);