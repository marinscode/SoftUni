function solve(arr) {
    let result = {};

    for (let line of arr) {
        let [country, town, travelCost] = line.split(" > ");

        //country does not exist
        if (!Object.keys(result).includes(country)) {
            result[country] = {};
        }

        //country exists
        // town does not exist
        if (!Object.keys(result[country]).includes(town)) {
            result[country][town] = Number(travelCost);
        }

        // town exists
        if (Number(travelCost) < result[country][town]) {
            result[country][town] = Number(travelCost);
        }

    }

    let sortedCountries = Object
        .entries(result)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [country, towns] of sortedCountries) {
        let townAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townAsEntries.join(' ')}`);
    }
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);