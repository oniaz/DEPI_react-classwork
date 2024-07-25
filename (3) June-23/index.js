// console.log('Omnia')

// var x=5
// var y = 6

// var z = x+y

// console.log(z);

document.getElementById('btn_1').addEventListener('click', function(){
    // console.log('clicked!!!')

    var num1 = Number(document.getElementById('num1_q1').value);
    var num2 = Number(document.getElementById('num2_q1').value);
    var sum = num1 + num2;
    document.getElementById('res_1').innerHTML = sum;

})

document.getElementById('btn_2').addEventListener('click', function(){
    var num1 = Number(document.getElementById('num1_q2').value);
    var num2 = Number(document.getElementById('num2_q2').value);
    var num3 = Number(document.getElementById('num3_q2').value);
    var average = (num1 + num2 + num3) / 3;

    document.getElementById('res_2').innerHTML = average;
})

document.getElementById('btn_3').addEventListener('click', function(){
    var distance = Number(document.getElementById('distance_q3').value);
    var speed = Number(document.getElementById('speed_q3').value);
    var time = (distance / speed);
    document.getElementById('res_3').innerHTML = time;

})

document.getElementById('btn_5').addEventListener('click', function(){
    var length_cm = Number(document.getElementById('length_cm_q5').value);
    var length_m = length_cm / 100;
    document.getElementById('res_5').innerHTML = length_m;
})

var x = Number(prompt('enter x'))
var y = Number(prompt('enter y'))

console.log('x = '+ x + ', y = '+ y)

var tmp = x;
var x = y;
var y = tmp;

console.log('x = '+ x + ', y = '+ y)

// 5 % 2 = 1 --> 5-2-2 = 1  how many times we can remove 2 from 5

// var x --> declaration
// x = 6 --> intialization

//hoisted (let vs var)
// var is hoisted while let isn't
// using a varaible before initializaing it using let gives an error.
// while with var will give undefined
// iow, var - being hoisted, it's as if it has been declared at the  very top of the scope
