function solve(input) {
    let command = input.shift();
    let adults = 0;
    let kids = 0;
    let toys = 0;
    let sweaters = 0;

    while (command != 'Christmas') {
        let age = Number(command);
        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        command = input.shift();
    }

    toys = kids * 5;
    sweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toys}`);
    console.log(`Money for sweaters: ${sweaters}`);
}

solve(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"]);