function solve(char1, char2) {
    let charCode1 = char1.charCodeAt(0);
    let charCode2 = char2.charCodeAt(0);
    let startPoint = Math.min(charCode1, charCode2);
    let endPoint = Math.max(charCode1, charCode2);
    let result = [];
    
    while(startPoint < endPoint -1) {
        startPoint++;
        result.push(String.fromCharCode(startPoint));
    }

    console.log(result.join(" "));
}

solve('a', 'd');