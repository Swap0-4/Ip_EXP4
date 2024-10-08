class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, rollNo) {
        super(name, age);
        if (rollNo <= 0) {
            throw new Error('Roll number must be greater than zero.');
        }
        this.rollNo = rollNo;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Roll No: ${this.rollNo}`);
    }

    study() {
        console.log(`${this.name} is studying.`);
    }
}

try {
    const student1 = new Student('Swaraj', 20, 101);
    student1.displayDetails();
    student1.study();

    const student2 = new Student('Raj', 22, 0);
} catch (error) {
    console.error(error.message);
}
