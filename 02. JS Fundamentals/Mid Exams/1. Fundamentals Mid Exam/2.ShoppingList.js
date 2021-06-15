function solve(arr) {
    let initList = arr.shift().split('!');
    let line = arr.shift()

    while(line != 'Go Shopping!') {
        let [command, ...item] = line.split(" ");
        if(command == 'Urgent') {
            if(!initList.includes(item[0])) {
                initList.unshift(item[0]);
            }
        }
        if(command == 'Unnecessary') {
            if(initList.includes(item[0])) {
                let index = initList.indexOf(item[0]);
                initList.splice(index, 1);
            }
        }
        if(command == 'Correct') {
            if(initList.includes(item[0])) {
                let index = initList.indexOf(item[0]);
                initList.splice(index, 1, item[1]);
            }
        }
        if(command == 'Rearrange') {
            if(initList.includes(item[0])) {
                let index = initList.indexOf(item[0]);
                let rearrangedItem = initList.splice(index, 1);
                initList.push(rearrangedItem);
            }
        }

        line = arr.shift();
    }

    console.log(initList.join(", "));
}

solve(['Tomatoes!Potatoes!Bread',
    'Unnecessary Milk',
    'Urgent Tomatoes',
    'Go Shopping!'
]);