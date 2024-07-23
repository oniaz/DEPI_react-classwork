// functions


function print() {
    console.log('O');
}

console.log(print);


// can assign functions to variables
const p = function () {
    console.log('m');
}

// rest parameters

function collection(x, y, ...z) {
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    console.log(`rest: ${z}`);
}

collection(1, 2, 3, 4, 5, 6);


// arrow fucntions

const arrow = (x) => {
    // different syntax: same as cosnt arrow = fucntion () {}
    // also differs in the .this keyword? (to be covered in future sessions)
}

// 2 way data binding (this keyword?)
// helper functions


// callback fucntion
// boo is a callback function
// higher order fucntion -> takes functions as args, may return function
// fooo is a higher order fucntion

function foo(boo) {
    boo()
}

foo(function () {
    console.log('bar')
})

function fooo(x, boo) {
    if (x == 'click') {
        boo()
    }
}

fooo('click', function () {
    console.log('baaar')
});


// pure vs non-pure functions
// non-pure functions -> depends on avariable defined outside the function
let gr = 'hello'
function greet(name) {
    return `${gr} ${name}`
}
console.log(greet('Omnia'))

// immediately invoked fucntion
// ()()
// syntax: function wdwd() { ... })()
// (function wdwd() {
//     console.log('this is an immediately invoked function');
// })();


// logical programming : has no loops - uses recursion instead

// recursive function: function calls itself
// base case -> stopping condidion

var count = 5;
const r = function(){
    if (count > 0){
        console.log('omnia');
        count--;
        r()
    }
}

r();