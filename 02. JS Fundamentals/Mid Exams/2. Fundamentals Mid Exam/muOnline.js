function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');
    let alive = true;
    let differenceHealth;

    for (let i = 0; i < rooms.length; i++) {
        let [command, num] = rooms[i].split(" ");
        if (command == 'potion') {
            health += Number(num);
            if( health >= 100) {
                differenceHealth = num - health + 100;
                health = 100;
                console.log(`You healed for ${differenceHealth} hp.`);
            } else {
                console.log(`You healed for ${num} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoins += Number(num);
            if (alive) {
                console.log(`You found ${num} bitcoins.`);
            }
        } else {
            health -= num;
            if(health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                alive = false;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i+1}`);
            }
        }
    }

    if(alive == true ) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000' );