function solve(input) {
    let kozunak = Number(input.shift());
    let eggs = Number(input.shift());
    let kurabii = Number(input.shift());
    let result = (kozunak * 3.20) + (eggs * 4.35) + (kurabii * 5.40) + (eggs * 12 * 0.15);

    console.log(result.toFixed(2));
}

solve([ '3', '2', '3']);