function solve(input) {
    let numBakes = Number(input.shift());
    let sugar = 0;
    let flour = 0;
    let totalSugar = 0;
    let totalFlour = 0;

    for(let i = 1; i <= numBakes; i++) {
        let tempSugar = Number(input.shift());
        let tempFlour = Number(input.shift());

        if(tempSugar > sugar) {
            sugar = tempSugar;
        }

        if(tempFlour > flour) {
            flour = tempFlour;
        }

        totalSugar += tempSugar;
        totalFlour += tempFlour;
    }

    console.log(`Sugar: ${Math.ceil(totalSugar/950)}`);
    console.log(`Flour: ${Math.ceil(totalFlour/750)}`);
    console.log(`Max used flour is ${flour} grams, max used sugar is ${sugar} grams.`)
}

solve(['3',
    '400',
    '350',
    '250',
    '300',
    '450',
    '380'])