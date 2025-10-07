let input = prompt("Enter your percentage:");
let per = input;

if(per >= 90){
    console.log("A grade");
}else if(per <=80 && per >=90){
    console.log("B grade");
}else if(per <=80 && per >=79){
    console.log("C grade");
}else if (per >= 70 ){
    console.log("D grade");
}else{
    console.log("You are fail");
}