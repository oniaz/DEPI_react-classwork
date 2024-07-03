
// document.getElementById('btn_1').addEventListener('click', function () {
//     var num = Number(document.getElementById('num1_q1').value);
//     var res = document.getElementById('res_1');
//     result_str = ""
//     for (i = 1; i <= num; i++) {
//         result_str += (" " + i)
//     }
//     res.innerHTML = result_str;
// })


var numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log("Even numbers only:")
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}
console.log("Array reversed:")
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i])
}

console.log("Push():")
var arr = []
console.log(arr)
arr.push(66)
console.log(arr)

console.log("Negative numbrs only:")
neg_arr = [1, -1, 4, -6, 4, 6, -5, -32]
for (let i = 0; i < neg_arr.length; i++) {
    if (neg_arr[i] < 0) {
        console.log(neg_arr[i])
    }
}


exists_arr = [1, 2, 3, 4, 1, 2, 6, 7, 3, 0, 5]
// var x = prompt("Enter number:")
var x = 4
console.log("Check if number exists in array:")

var found = false;

for (let i = 0; i < exists_arr.length; i++) {
    if (exists_arr[i] == x) {
        found = true;
    }
}

if (found) {
    console.log(x + " exists in the array")
} else {
    console.log(x + " doesn't exist in the array")
}

//

console.log("Check how many times number exists in array:")

var sum = 0

for (let i = 0; i < exists_arr.length; i++) {
    if (exists_arr[i] == x) {
        sum += 1;
    }
}

console.log(x + " exists " + sum + " time(s) in the array")


sum = 0;

console.log("Sums elemnts of array:")
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)

console.log("Max num in array:")
max_arr = [1, 6, , 33, 5, 7, 77, 3, -8, -44, 0]

var max = max_arr[0]
for (let i = 0; i < max_arr.length; i++) {
    if (max_arr[i] > max) {
        max = max_arr[i];
    }
}
console.log(max)

console.log("Total of even and odd numbers:")
var odd = 0
var even = 0

for (let i = 0; i < max_arr.length; i++) {
    if (max_arr[i] % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}
console.log("Even: " + even + "\nOdd: " + odd)

console.log("Second biggest number")

// max_arr = [0]
// max_arr = [55, 66, 66]
// max_arr = [5, 5, 5]
max_arr = [-11, -66, -444]


max = max_arr[0]
s_max = max_arr[0]

for (let i = 0; i < max_arr.length; i++) {
    if (max == s_max && max_arr[i] < s_max) {
        s_max = max_arr[i]
    } else if (max_arr[i] > max) {
        s_max = max;
        max = max_arr[i];
    }
}
if (max != s_max) {
    console.log("Biggest number: " + max + "\nSecond Biggest number: " + s_max)
} else {
    console.log("No Second Biggest number")

}

