let num1 = Number(prompt("Enter Starting number of the range:"));
let num2 = Number(prompt("Enter Ending number of the range:"));
console.log("Prime number between" + " " + num1 + "and" + " " + num2 + "is:");

function printPrime(num) {

    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }

    }

    return true;
}
let count=0;
for (let num = num1; num <= num2; num++){
    if (printPrime(num)) {
        console.log(num);
        count++;
    }
}
console.log("Total count of prime number is--"+ count);

