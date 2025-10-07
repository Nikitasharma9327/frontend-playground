let input = Number(prompt("Enter your number:"));

let num = input;

for(let i=2; i<=num/2; i++){
    if(num%i==0){
        console.log(num + " "+ "is Not prime");
    }else{
        console.log(num + " "+ " is prime");
    }
}
console.log(num);