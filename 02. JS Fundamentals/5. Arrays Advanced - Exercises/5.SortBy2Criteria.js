function solve(arr) {
    let result = arr.sort(function (a,b) {
        return a.length - b.length || a.localeCompare(b);
    });    

    for(let word of result) {
        console.log(word);
    }
}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);