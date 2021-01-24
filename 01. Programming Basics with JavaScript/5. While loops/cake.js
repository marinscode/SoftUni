function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let area = width * length;
    let pieces = 0;
    let stop = false;

    while (area > pieces) {
        let line = input.shift();
        if (line == 'STOP') {
            stop = true;
            break;
        }
        pieces += Number(line);
    }

    if (stop) {
        console.log(`${area - pieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${pieces - area} pieces more.`);
    }

}

solve(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);