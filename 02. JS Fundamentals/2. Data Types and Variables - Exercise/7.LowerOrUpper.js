function solve(char) {
    if (char.toUpperCase() === char) {
        console.log('upper-case');
    }

    if (char.toLowerCase() === char) {
        console.log('lower-case');
    }
}

solve('L');