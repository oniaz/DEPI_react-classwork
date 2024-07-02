
document.getElementById('btn_1').addEventListener('click', function () {
    var num = Number(document.getElementById('num1_q1').value);
    var res = document.getElementById('res_1');
    result_str = ""
    for (i = 1; i <= num; i++) {
        result_str += (" " + i)
    }
    res.innerHTML = result_str;
})


document.getElementById('btn_2').addEventListener('click', function () {
    var from = Number(document.getElementById('num1_q2').value);
    var to = Number(document.getElementById('num2_q2').value);
    var res = document.getElementById('res_2');

    if (from > to) {
        res.innerHTML = "Enter a valid range"
    } else {
        result_str = ""
        for (i = from; i <= to; i++) {
            console.log(i)
            result_str += ("<br>" + i)
            // inner.HTML += '<h1> + i + </h1>'
        }
        res.innerHTML = result_str;
    }
})

document.getElementById('btn_3').addEventListener('click', function () {
    var res = document.getElementById('res_3');
    var base = 0;
    var sum = 0
    while (sum < 10000) {
        base += 1;
        sum += base ** 2;
    }
    res.innerHTML = base;

    // for (i = 1; sum < 10000; i++) {
    //base increments one extra time before chekcing < 10000, so need to prnt i - 1
    // }
})

document.getElementById('btn_3').addEventListener('click', function () {
    var base = Number(document.getElementById('num1_q4').value);
    var power = Number(document.getElementById('num2_q4').value);
    var res = document.getElementById('res_3');
    sum = base;

    for (i = 1; i < power; i++) {
        sum *= base;
    }
    res.innerHTML = sum;
})

document.getElementById('btn_5').addEventListener('click', function () {
    var dice_1 = parseInt(Math.random() * 6) + 1
    var dice_2 = parseInt(Math.random() * 6) + 1

    while (dice_1 != dice_2) {
        dice_1 = parseInt(Math.random() * 6) + 1
        dice_2 = parseInt(Math.random() * 6) + 1
    }

    console.log('dice 1: ' + dice_1 + " dice 2: " + dice_2)
    document.getElementById('res_5').innerHTML = dice_1 + " " + dice_2;
})

var random = parseInt(Math.random() * 10) + 1

document.getElementById('btn_6').addEventListener('click', function () {
    var num = Number(document.getElementById('num1_q6').value);
    var res = document.getElementById('res_6');

    console.log(random);

    if (num == random) {
        console.log("correct")
        res.innerHTML = 'correct answer';
    } else {
        console.log("wrong")
        res.innerHTML = 'wrong answer';
    }
})

var tries = 3;
document.getElementById('btn_7').addEventListener('click', function () {
    var num = Number(document.getElementById('num1_q7').value);
    var res = document.getElementById('res_7');

    console.log(random);

    if (tries > 0) {
        if (num == random) {
            console.log("correct")
            res.innerHTML = 'correct answer';
        } else {
            tries -= 1;
            console.log("wrong")
            if (tries == 0) {
                res.innerHTML = 'wrong answer.<br>Game Over';

            } else {
                res.innerHTML = 'wrong answer, try again <br>Tries left: ' + tries;

            }
        }
    }

})
