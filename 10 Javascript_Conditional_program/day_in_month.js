// let input = prompt("Enter your month");

let month = prompt("Enter a month number (1-12):").toLowerCase();
let days;

switch (month) {
  case "january":
  case "march":  
  case "may":  
  case "august":  
  case "july":  
  case  "october": 
  case  "december": 
    days = "31 days";
    break;
  case "april":  
  case "june":  
  case "september":  
  case  "november": 
    days = "30 days";
    break;
  case "february":  
    days = "28 or 29 days (depending on leap year)";
    break;
  default:
    days = "Invalid month! Please enter a number between 1 and 12.";
}

console.log(days);

