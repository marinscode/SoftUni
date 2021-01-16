function foodForPets(input) {
    let days = Number(input.shift());
    let totalFood = Number(input.shift());
    let dogFood = 0;
    let catFood = 0;
    let counter = 0;
    let bonus = 0;

    for( let i = 1; i <= days; i++) {
        let dogsFood = Number(input.shift());
        dogFood += dogsFood;
        let catsFood = Number(input.shift());
        catFood += catsFood;

        counter++;

        if(counter % 3 === 0) {
            bonus += (dogsFood + catsFood) * 0.1;
        }

    }

    bonus = Math.round(bonus);

    console.log(`Total eaten biscuits: ${bonus}gr.`);
    console.log(`${(((dogFood + catFood)/totalFood)*100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((dogFood /( dogFood+ catFood))* 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood /( dogFood+ catFood))* 100).toFixed(2)}% eaten from the cat.`);
};

foodForPets([3,
    1000,
    300,
    20,
    100,
    30,
    110,
    40,
    ]);