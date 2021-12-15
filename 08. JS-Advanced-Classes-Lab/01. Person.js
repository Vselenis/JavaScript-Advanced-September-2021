class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
