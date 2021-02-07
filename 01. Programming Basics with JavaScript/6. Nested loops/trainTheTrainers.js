function solve(input) {
    let n = Number(input.shift());
    let countPresentation = 0;
    let total = 0;
    let line = input.shift();

    while( line != 'Finish') {
        let presentation = line;
        let avarage = 0;
        line = input.shift();
        for (let i = 1; i <= n; i++) {
            avarage += Number(line);
            line = input.shift();
        }
        countPresentation++;
        console.log(`${presentation} - ${(avarage/n).toFixed(2)}.`);
        total += avarage;
    }

    console.log(`Student's final assessment is ${(total/(countPresentation*n)).toFixed(2)}.`);
    
}

solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);