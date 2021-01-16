function LoadSuitcases(input) {
    let remainingCapacity = Number(input.shift());
    let index = 0;
    let suitcasesCounter = 0;
    let command;

    while ((command = input.shift()) !== 'End' )  {
        let suitcaseSize = Number(command);
        index++;
        
        if(index % 3 === 0) {
            suitcaseSize *= 1.1;
        }
        
        if((remainingCapacity - Number(command)) < 0) {
            break;
        }

        remainingCapacity -= suitcaseSize;

        suitcasesCounter++;
    }

    if (command === 'End') {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);
}

LoadSuitcases([700.5,
    180,
    340.6,
    126,
    220
    ]);