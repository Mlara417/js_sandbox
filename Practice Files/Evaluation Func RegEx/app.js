let re;
re = /hello/i;  //i = case insensitive
//re = /hello/g; //global search 

//Prints re with forward slashes
//console.log(re);
//Prints re without forward slashes
//console.log(re.source);

//exec() - Return result in an array or null
/* const result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input); */

//test() - returns true or false
/* const result = re.test('Hello');
console.log(result); */

//match() - return result array or null
/* const str = 'Hello there';
const result = str.match(re);
console.log(result); */

//search() - Returns index of the first match if not found returns -1
/* const str = 'Hello There';
const result = str.search(re);
console.log(result); */

//replace() - return new string with new some or all matches a pattern
/* const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr); */