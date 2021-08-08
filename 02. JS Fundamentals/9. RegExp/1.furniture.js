function solve(input) {
    let line = input.shift();
    let pattern = /^>>(?<name>\w+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)$/;
    let furnitures = [];
    let totalPrice = 0;

    while (line != 'Purchase') {
        let match = pattern.exec(line);
        if (match != null) {
            let { name, price, quantity } = match.groups;
            price = Number(price);
            quantity = Number(quantity);
            totalPrice += price * quantity;
            furnitures.push(name);
        }

        line = input.shift();
    }

    console.log('Bought furniture:');
    for (let item of furnitures) {
        console.log(item);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

solve([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]);