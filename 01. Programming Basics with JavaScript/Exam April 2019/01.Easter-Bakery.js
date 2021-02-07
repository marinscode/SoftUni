function solve(input) {
    let flourPrice = Number(input.shift());
    let flourKg = Number(input.shift());
    let sugarKg = Number(input.shift());
    let eggs = Number(input.shift());
    let maya = Number(input.shift());
    let sugarPrice = (flourPrice * 0.75)
    let result = (flourPrice*flourKg) + (sugarKg * sugarPrice) + (eggs * (flourPrice*1.1)) + (maya * (sugarPrice * 0.2));

    console.log(result.toFixed(2));
}

solve(['50',
    '10',
    '3.5',
    '6',
    '1'
    ]);