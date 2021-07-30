function solve(words, text) {
    words = words.split(', ');
    let textArr = text.split(' ');
    let result = [];

    for (let token of textArr) {
        let replaced = false;
        for (let word of words) {
            if (token == '*'.repeat(word.length)) {
                result.push(word);
                replaced = true;
            } 
        }
        if(replaced == false) {
            result.push(token);
        }
    }

    console.log(result.join(' '));
}

solve('great', 'softuni is ***** place for learning new programming languages');
solve('great, learning', 'softuni is ***** place for ******** new programming languages');