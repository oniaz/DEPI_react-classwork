// var num1 = Number(prompt('enter first number: '))
// var num2 = Number(prompt('enter second number: '))


document.getElementById('btn_1').addEventListener('click', function () {
    var num1 = Number(document.getElementById('num1_q1').value);
    var num2 = Number(document.getElementById('num2_q1').value);
    var max = document.getElementById('res_1');

    if (num1 > num2) {
        max.innerHTML = num1;
    } else {
        max.innerHTML = num2;
    }
})

document.getElementById('btn_2').addEventListener('click', function () {
    var num1 = Number(document.getElementById('num1_q2').value);
    var num2 = Number(document.getElementById('num2_q2').value);
    var num3 = Number(document.getElementById('num3_q2').value);
    var max = document.getElementById('res_2');
    var res_str = "Max number is "

    if (num1 > num2 && num1 > num3) {
        max.innerHTML = (res_str + num1);
    } else {
        if (num2 > num3) {
            max.innerHTML = (res_str + num2);
        } else {
            max.innerHTML = (res_str + num3);
        }
    }
})

document.getElementById('btn_4').addEventListener('click', function () {
    var from = Number(document.getElementById('num1_q4').value);
    var to = Number(document.getElementById('num2_q4').value);
    var num = Number(document.getElementById('num3_q4').value);

    var res = document.getElementById('res_4');

    if (num >= from && num <= to) {
        res.innerHTML = (num + " is between " + from + ' and ' + to);
    } else {
        res.innerHTML = (num + " is not between " + from + ' and ' + to);
    }
})

document.getElementById('btn_5').addEventListener('click', function () {
    var num1 = Number(document.getElementById('num1_q5').value);
    var op = document.getElementById('op_q5').value;
    var num2 = Number(document.getElementById('num2_q5').value);
    var res
    console.log(num1)
    console.log(op)
    console.log(num2)

    if (op == '+') {
        res = num1 + num2
    } else if (op == '-') {
        res = num1 - num2
    } else if (op == '*') {
        res = num1 * num2
    } else if (op == '/') {
        res = num1 / num2
    } else {
        res = op
    }
    console.log(res)
    document.getElementById('res_5').innerHTML = res;
})

// || or
// && and

