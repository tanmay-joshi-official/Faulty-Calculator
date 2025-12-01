console.log("Faulty Calculator Project")

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let ch = Number(prompt("Enter choice from 1 to 4: \n1. Add \n2. Subtract \n3. Multiply \n4. Divide\n"));
let c = Math.random();
console.log(c)

function sum(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function power(a, b) {
    return a ** b;
}

if (c < 0.1) {
    if (ch == 1) {
        subtract = subtract(a, b);
        alert("Result is "+ subtract)
    }
    else if (ch == 2) {
        divide = divide(a, b);
        alert("Result is "+ divide)
    }
    else if (ch == 3) {
        sum = sum(a, b);
        alert("Result is "+ sum)
    }
    else if (ch == 4) {
        power = power(a, b);
        alert("Result is "+ power)
    }
    else {
        alert("Enter choice from 1 to 4 only.")
    }
}
else {
    if (ch == 1) {
        sum = sum(a, b);
        alert("Result is "+ sum)
    }
    else if (ch == 2) {
        subtract = subtract(a, b);
        alert("Result is "+ subtract)
    }
    else if (ch == 3) {
        multiply = multiply(a, b);
        alert("Result is "+ multiply)
    }
    else if (ch == 4) {
        divide = divide(a, b);
        alert("Result is "+ divide)
    }
    else {
        alert("Enter choice from 1 to 4 only.")
    }
}