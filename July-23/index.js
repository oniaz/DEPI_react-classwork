// sync functions -> block code until it's done

console.log('start');
console.log('middle');
console.log('end');

//async function -> threading -> doesn't block the rest of the code, performs function in parallel to the code
console.log('start');
setTimeout( () => { // asyn fucntion
    console.log('middle');
}, 3000);

console.log('end');