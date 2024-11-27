// oop and classes

console.log(this); // global scope/ window

const car = {
    type: 'lada',
    drive: function () {
        console.log(`you are driving ${this.type}`);
    }
}

car.drive();

class Animal {

    alive = true; //static property
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

const animal1 = new Animal('gorg', 3);
console.log(animal1);
animal1.eat();


class Human {
    alive = true;

    constructor(_firstName, _lastName, _age) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
    }

    sleep() {
        console.log(`${this.firstName} is sleeping.`);
    }

    wakeUp() {
        console.log(`${this.firstName} is waking up`);
    }
}
const human1 = new Human('phib', 'pleb', 23);
console.log(human1);
human1.sleep();
console.log(human1.age);


class Rabbit extends Animal {

    runspeed;

    constructor(name, age, runspeed) {
        super(name, age)
        this.runspeed = runspeed;
    }

}

class Child extends Human {

    constructor(_firstName, _lastName, _age, _school) {
        super(_firstName, _lastName, _age);
        this.school = _school;
    }

    goToSchool() {
        console.log(`${this.firstName} is going to school`);
    }

    // get age() {
    //     return this.age;
    // }

    // set age(value) {
    //     if (value < 0) {
    //         value = 0;
    //     }
    //     this.age = value;
    // }

    // set school(value) {
    //     this.school = value;
    // }
}

const child1 = new Child('galz', 'Ahgh', 13, 'Sw High');
child1.wakeUp();
child1.goToSchool();
console.log(child1.lastName);
console.log(child1.school);


async function loadFile() {
    let fileLoading = true;
    // let fileLoading = false;

    if (fileLoading) {
        return ('file Loaded')
    } else {
        throw ('error: failed to load file. teeheee');
    }
}

async function startLoading() {
    try {
        let message = await loadFile();
        console.log(message);
    }
    catch (err) {
        console.log(err);
    }
}

startLoading();

async function loadProducts() {
    const url = 'http://localhost:8000/products';
    const result = await fetch(url);
    console.log(result);
    resultJson = await result.json();
    console.log(resultJson);
}
loadProducts()
