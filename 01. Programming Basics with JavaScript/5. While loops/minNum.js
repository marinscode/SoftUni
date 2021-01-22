function minNumber(input) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while (input[index] != 'Stop') {
        let num = Number(input[index]);
        if(num < minNum) {
            minNum = num;
        }
        index++;
    }
    console.log(minNum);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);