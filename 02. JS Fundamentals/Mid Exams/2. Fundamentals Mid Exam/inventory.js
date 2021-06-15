function inventory(input) {
    let items = input[0].split(", ");
    for (let i = 1; i < input.length; i++) {
        let [command, item] = input[i].split(' - ');
        let index = items.indexOf(item);

        if (command == 'Collect') {
            if (!items.includes(item)) {
                items.push(item);
            }
        }
        if (command == 'Drop') {
            if (index >= 0) {
                items.splice(index, 1);
            }
        }
        if (command == 'Combine Items') {
            let combItems = item.split(':');
            items.splice(items.indexOf(combItems[0]) + 1, 0, combItems[1]);
        }
        if (command == 'Renew') {
            if (index >= 0) {
                items.splice(index, 1);
                items.push(item);
            }
        }

        if (command == 'Craft!') {
            console.log(items.join(', '));
            break;
        }
    }
}


inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);