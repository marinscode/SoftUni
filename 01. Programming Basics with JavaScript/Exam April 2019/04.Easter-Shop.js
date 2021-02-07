function solve(input) {
    let eggsInShop = Number(input.shift());
    let line = input.shift();
    let isClose = true;
    let soldEggs = 0;

    while (line != 'Close') {
        if(line == 'Buy') {
            let eggs = Number(input.shift());
            if(eggs <= eggsInShop) {
                eggsInShop -= eggs;
                soldEggs += eggs;
            } else {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggsInShop}.`);
                isClose = false;
                break;
            }
        } else if(line == 'Fill') {
            eggsInShop += Number(input.shift());
        }
        line = input.shift();
    }

    if(isClose) {
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`)
    }
}

solve(['20',
    'Fill',
    '30',
    'Buy',
    '15',
    'Buy',
    '20',
    'Close'
    ]);