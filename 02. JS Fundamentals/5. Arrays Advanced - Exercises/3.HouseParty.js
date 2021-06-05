function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, command] = arr[i].split(" is ");
        command = command.split(" ");

        if (command.includes("not")) {
            if (result.includes(name)) {
                result.splice(result.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (!result.includes(name)) {
                result.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    }

    for (let name of result) {
        console.log(name);
    }
}

solve(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);