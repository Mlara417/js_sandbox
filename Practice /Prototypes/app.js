//Object.prototype
//Person.prototype

//Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
/*     this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } */
}

//Moving Calculate age function to prototype since it never changes
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function(){

    return `${this.firstName} ${this.lastName}`;

}


//Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-1990');
const mary = new Person('Mary', 'Johnson', 'March, 20 1978');

console.log(mary.getFullName());

console.log(john.calculateAge());

mary.getsMarried('Danny');

console.log(mary.getFullName());

//If Mary has a property of first name it returns true
console.log(mary.hasOwnProperty('firstName'));