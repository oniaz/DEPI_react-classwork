const o1 = {
    name: "o1",
    salary: 50
}

let o2 = o1;

console.log(o1.salary); // 50
console.log(o2.salary); // 50

o2.salary = 100;

console.log(o1.salary);
console.log(o2.salary);

o2 = { ...o1 };

o2.salary = 200;

console.log(o1.salary); // 50
console.log(o2.salary); // 100

const age = 45;

const obj1 = {
    name: "obj",
    age: age,
}
console.log(obj1.age); // 45

// const obj1.age = 50; // error


const salary = 100;
const bonus = 20;
const currency = "USD";

console.log(currency + salary + bonus); // USD10020
console.log(salary + bonus + currency); // 120USD
console.log(currency + (bonus + salary)); // 120USD

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(null == false); // false
console.log(null === false);

console.log(false == undefined)
console.log(false === undefined)

// ----------------------------
console.log('---------------------');

console.log(Boolean(null) == Boolean(undefined)); // true
console.log(Boolean(null) === Boolean(undefined)); // false

console.log(Boolean(null) == false); // false
console.log(Boolean(null) === false);

console.log(false == Boolean(undefined))
console.log(false === Boolean(undefined))


// ----------------------------
