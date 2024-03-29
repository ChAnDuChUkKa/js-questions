function rgb(chars) {
    // Count occurrences of each character
    let countOfR = 0, countOfG = 0, countOfB = 0;
    for (const char of chars) {
        if (char === 'R') countOfR++;
        else if (char === 'G') countOfG++;
        else if (char === 'B') countOfB++;
    }

    // Reconstruct the list with sorted characters
    let index = 0;
    for (let i = 0; i < countOfR; i++) {
        chars[index++] = 'R';
    }
    for (let i = 0; i < countOfG; i++) {
        chars[index++] = 'G';
    }
    for (let i = 0; i < countOfB; i++) {
        chars[index++] = 'B';
    }
}

const chars=['R','B','R','G','G','B','s']
rgb(chars)
console.log(chars)