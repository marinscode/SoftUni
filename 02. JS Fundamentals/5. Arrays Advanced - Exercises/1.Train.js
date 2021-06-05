function solve(arr) {
    let wagons = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[0] == "Add") {
            wagons.push(command[1]);
        } else {
            let passengers = Number(command[0]);
            for(let j = 0; j < wagons.length; j++) {
                if((passengers + wagons[j]) <= maxCapacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);