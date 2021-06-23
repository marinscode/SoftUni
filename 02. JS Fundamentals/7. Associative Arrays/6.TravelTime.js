function solve(arr) {
    let result = {};

    for (let line of arr) {
        let [country, town, travelCost] = line.split(" > ");
        if (!result.hasOwnProperty(country)) {
            result[country] = [{
                town: town,
                travelCost: Number(travelCost)
            }];
        } else {
            if(!result[country].includes(town)) {
                result[country].push({town: town, travelCost: Number(travelCost)});
            } else {
                console.log('ddd');
            }
        }

    }

    console.log(result);
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);