function TrekkingMania(input) {
    let totalGroups = Number(input.shift());
    let totalPeople = 0;
    let peopleMusala = 0;
    let peopleMonblan = 0;
    let peopleKilimandjaro = 0;
    let peopleK2 = 0;
    let peopleEveretst = 0;
    

    for(let i = 1; i <= totalGroups; i++) {
        let people = Number(input.shift());
        totalPeople += people;
        if(people <= 5) {
            peopleMusala += people;
        } else if ( people > 5 && people <= 12) {
            peopleMonblan += people;
        } else if ( people > 12 && people <= 25) {
            peopleKilimandjaro += people;
        } else if ( people > 25 && people <= 40) {
            peopleK2 += people;
        } else {
            peopleEveretst += people;
        }
    }

    console.log(`${((peopleMusala/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((peopleMonblan/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((peopleKilimandjaro/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((peopleK2/totalPeople)*100).toFixed(2)}%`);
    console.log(`${((peopleEveretst/totalPeople)*100).toFixed(2)}%`);
}

TrekkingMania([10,
    10,
    5,
    1,
    100,
    12,
    26,
    17,
    37,
    40,
    78]);