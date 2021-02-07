function solve(input) {
    let numBakes = Number(input.shift());
    let maxPoints = 0;
    let winner = '';

    for(let i = 1; i <= numBakes; i++){
        let chefName = input.shift();
        let points = 0;
        let line = input.shift();
        while(line != 'Stop') {
            points += Number(line);
            line = input.shift();
        }
        console.log(`${chefName} has ${points} points.`);
        if(points > maxPoints) {
            maxPoints = points;
            winner = chefName;
            console.log(`${chefName} is the new number 1!`);
        }
    }

    console.log(`${winner} won competition with ${maxPoints} points!`);

}

solve(['3',
    'Chef Manchev',
    '10',
    '10',
    '10',
    '10',
    'Stop',
    'Natalie',
    '8',
    '2',
    '9',
    'Stop',
    'George',
    '9',
    '2',
    '4',
    '2',
    'Stop'])