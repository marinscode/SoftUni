function solve(text) {
    let words = text.split(' ');
    let result = [];

    for(let word of words) {
        if(word[0] == '#' && word.length > 1) {
            if(isValidWord(word.slice(1))) {
                result.push(word.slice(1));
            }
        }
    }

    for(let token of result) {
        console.log(token);
    }

    function isValidWord(word) {
        for(let i = 0; i<word.length; i++) {
            let charCode = word.charCodeAt(i)
            if(charCode < 65 || (charCode > 90 && charCode < 97) || charCode > 122) {
                return false;
            }
        }
        return true;
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');