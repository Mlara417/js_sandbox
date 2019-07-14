// Person constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    // Calculating Age - Date functions are in relation to Jan 1, 1970 
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

/* const brad = new Person('Brad', 34);
const john = new Person('John', 32);

console.log(brad.age); */

const brad = new Person('Brad', '9-10-1991');
console.log(brad.calculateAge());