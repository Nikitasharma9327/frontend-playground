let input = Number(prompt("Enter the number:"));
let sum = 0;
let num = input;
for (let i= 1; i<=num/2; i++){
    if(num %i==0){
         sum+=i;
    }
}
if(sum === num){
    console.log(num + " "+ "is perfet number");
}else{
    console.log(num + " "+ "is not perfect number");
}