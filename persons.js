//using ES6 class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    static greet = () => {
        console.log("Hello from static arrow function!");
    }
}

const person = new Person('Aryan', 20);
person.displayDetails(); 
Person.greet(); 

//using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.displayDetails = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};


const greet = () => {
    console.log("Hello from non-member arrow function!");
};


const person = new Person('Aryan', 20);


person.displayDetails();


greet(); 
