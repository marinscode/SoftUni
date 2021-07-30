function solve(word, text) {
    let words = text.split(' ');

    for (let needle of words) {
        if (needle.toLocaleLowerCase() == word.toLocaleLowerCase()) {
            return console.log(word);
        }
    }

    return console.log(`${word} not found!`);
}

solve('javascript',
    'JavaScript is the best programming language');
solve('python',
    'JavaScript is the best programming language'
);