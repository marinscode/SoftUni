function solve(input) {
    let eggSize = input.shift();
    let eggColor = input.shift();
    let eggs = Number(input.shift());
    let result = 0;

    if(eggSize == 'Large') {
        if(eggColor == 'Red') {
            result += eggs * 16;
        } else if(eggColor == 'Green') {
            result += eggs * 12;
        } else if(eggColor == 'Yellow') {
            result += eggs * 9;
        }
    } else if(eggSize == 'Medium') {
        if(eggColor == 'Red') {
            result += eggs * 13;
        } else if(eggColor == 'Green') {
            result += eggs * 9;
        } else if(eggColor == 'Yellow') {
            result += eggs * 7;
        }
    } else if(eggSize == 'Small') {
        if(eggColor == 'Red') {
            result += eggs * 9;
        } else if(eggColor == 'Green') {
            result += eggs * 8;
        } else if(eggColor == 'Yellow') {
            result += eggs * 5;
        }
    }

    console.log(`${(result*0.65).toFixed(2)} leva.`);
}

solve([
    'Large',
    'Red',
    '7'
]);