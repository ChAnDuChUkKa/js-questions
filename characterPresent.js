const prompt = require("prompt-sync")();

const s1=prompt("Enter first String:")
const s2=prompt("Enter second String:")

function hasAllCharacters(s1, s2) {
    // Create frequency maps for both strings
    const frequencyOfS1 = {};
    const frequencyOfS2 = {};
    
    // Populate frequency map for s1
    for (const char of s1) {
        frequencyOfS1[char] = (frequencyOfS1[char] || 0) + 1;
    }
    
    // Populate frequency map for s2
    for (const char of s2) {
        frequencyOfS2[char] = (frequencyOfS2[char] || 0) + 1;
    }
    
    // Check if all characters in s2 are present in s1
    for (const char in frequencyOfS2) {
        if (!(char in frequencyOfS1) || frequencyOfS2[char] > frequencyOfS1[char]) {
            return false;
        }
    }
    
    return true;
}

console.log(hasAllCharacters(s1,s2))