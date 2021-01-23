function oldBooks(input) {
    let book = input.shift();
    let index = 0;
    let lastWord = '';

    while (input[index] !== 'No More Books') {
        if ( input[index] == book) {
            console.log(`You checked ${index} books and found it.`);
            break;
        }
        index++;
        lastWord = input[index];
    }

    if(lastWord == 'No More Books') {
        console.log('The book you search is not here!');
        console.log(`You checked ${index} books.`);
    }

}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);