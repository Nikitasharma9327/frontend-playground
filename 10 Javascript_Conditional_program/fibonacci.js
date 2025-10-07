let n = Number(prompt("Please Enter Your number:"));
let num1 = 0, num2 = 1, value;

if (n <= 0) {
    console.log("Please Enter a positive Number:")
} else {
    console.log("Fibonacci Series:");
    for (let i = 1; i <= n; i++) {
        console.log(num1);
        value = num1+num2;
        num1 = num2;
        num2 = value;
    }
}