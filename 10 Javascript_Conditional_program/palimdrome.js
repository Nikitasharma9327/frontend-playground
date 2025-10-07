let num = Number(prompt("Enter Your number:"));
let re=0 , temp;
for (temp=num ; temp > 0; ){
    let digit = temp % 10;
    re = re * 10 + digit;
    temp = Math.floor(temp/10);
}

if (re == num){
    console.log(num + "-is Palindrom number");
}else{
    console.log(num + "-is Not Palindrom number");
}