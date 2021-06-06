function solve(arr) {
    let employees = {};

    for (let name of arr) {
        employees[name] = name.length;
    }

    for (let employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);