let num = Number(prompt("Enter your number:"));
let reverse =0;
for(let temp= num; temp > 0; ){
    let digit = temp % 10;  
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp/10);
}
console.log("Your Number is :", num);
console.log("Reverse Number is : ", reverse);
