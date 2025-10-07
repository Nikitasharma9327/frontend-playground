let input = prompt("Enter a single alphabet character:");

let char = input.toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(char + " is a vowel.");
    } else {
        console.log(char + " is a consonant.");
    }
