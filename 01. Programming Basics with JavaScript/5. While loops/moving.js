function moving(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    let high = Number(input.shift());
    let index = 0;
    let area = width * length * high;
    let neededArea = 0;

    while (input[index] != 'Done') {
        let cubes = Number(input[index]);
        neededArea += cubes;
        if(neededArea >= area) {
            console.log(`No more free space! You need ${neededArea-area} Cubic meters more.`);
            break;
        }
        index++;
    }
    if(input[index] == 'Done') {
        console.log(`${area - neededArea} Cubic meters left.`);
    }
}

moving(["10",
"1",
"2",
"4",
"6",
"Done"]);