function graduation(input) {
    let name = input.shift();
    let index = 0;
    let avgGrade = 0;
    let excluded = 0;

    while (index < input.length) {
        let num = Number(input[index]);
        avgGrade += num;
        if(num < 4) {
            excluded++;
            if(excluded == 2){
                console.log(`${name} has been excluded at ${index} grade`);
                break;
            }
        }

        index++;
    }
    if( excluded < 2) {
        console.log(`${name} graduated. Average grade: ${(avgGrade/input.length).toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;