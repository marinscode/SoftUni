function solve(arr) {
    let result = [];

    for(let iterator of arr) {
        let [town, lat, lon] = iterator.split(" | ");
        let obj = {
            'town': town,
            'latitude': Number(lat).toFixed(2),
            'longitude': Number(lon).toFixed(2)
        }

        result.push(obj);
    }

    for(let obj of result) {
        console.log(obj);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);