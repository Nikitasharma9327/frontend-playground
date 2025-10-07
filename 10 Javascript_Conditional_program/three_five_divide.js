let input = prompt("Enter your number:");

let number = input;

if(number % 3 == 0 && number % 5== 0){
    console.log(number + " " + "is divisable by 3 and 5");
}else {
    console.log(number + " "+ "is not divisable by 3 and 5")
}