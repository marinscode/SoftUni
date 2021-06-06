function solve(arr) {
    let heroes = [];

    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    for (let hero of arr) {
        let [name, level, ...items] = hero.split(' / ');
        items = items[0].split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        heroes.push(new Hero(name, level, items));

    }

    let sorted = heroes.sort((a, b) => a.level - b.level);

    for (let hero of sorted) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);