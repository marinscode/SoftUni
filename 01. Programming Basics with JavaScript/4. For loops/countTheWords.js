function countTheWords(input) {
    let words = input[0].split(" ");
    if( words.length > 10 ) {
        console.log(`The message is too long to be send! Has ${words.length} words.`);
    } else {
        console.log('The message was send successfully!');
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);