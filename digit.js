const prompt = require("prompt-sync")();

const num = prompt("Enter a number: ");
const digit = prompt("enter a digit to count: ");

function number0fdigits() {
  const digitStr = digit.toString();
    
    // Initialize count of occurrences
    let count = 0;
    
    // Iterate through numbers from 1 to N
    for (let i = 1; i <= num; i++) {
        // Convert current number to string
        const numStr = i.toString();
        
        // Count occurrences of digit D in current number
        count += numStr.split(digitStr).length - 1;
    }
    
    return count;
}
const cout=number0fdigits()
console.log(cout);
