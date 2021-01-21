function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let occurrences = {};
    let odd = [];

    for (let word of words) {
        if (!occurrences.hasOwnProperty(word)) {
            occurrences[word] = 1;
        } else {
            occurrences[word]++;
        }
    }

    for (let key in occurrences) {
        if ( occurrences[key] % 2 == 1) {
            odd.push(key);
        }
    }

    console.log(odd.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');