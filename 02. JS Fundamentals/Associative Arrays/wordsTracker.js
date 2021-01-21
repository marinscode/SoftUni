function wordsTracker(input) {
    let words = input.shift().split(' ');
    let wordsCounter = {};

    words.forEach(element => {
        wordsCounter[element] = 0
    });

    for (let word of input) {
        if (wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word]++;
        }
    }

    let sorted = Object.entries(wordsCounter);
    sorted.sort(compare);


    for( let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }

    function compare([wordA, countA], [wordB, countB]) {
        return countB - countA;
    }
}

wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);