function solve(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = input[i + 1];
        if (resources[resource] == undefined) {
            resources[resource] = Number(quantity);
        } else {
            resources[resource] += Number(quantity);
        }
    }

    for(let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
console.log('---------------');
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);