function solve(input) {
    let companies = {};

    for (let line of input) {
        let [name, employee] = line.split(' -> ');

        if (companies[name] == undefined) {
            companies[name] = [];
        }

        if (!companies[name].includes(employee)) {
            companies[name].push(employee);
        }
    }

    let sorted = Object
        .entries(companies)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for(let [company, employees] of sorted) {
        console.log(company);
        for(let employee of employees) {
            console.log(`-- ${employee}`);
        }
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);