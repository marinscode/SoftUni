function solve(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let floor = '';

    for (let i = floors; i > 0; i--) {
        for (let j = 0; j < rooms; j++) {
            if (i == floors) {
                floor += `L${i}${j} `;
            } else {
                if (i % 2 == 0) {
                    floor += `O${i}${j} `;
                } else if (i % 2 == 1) {
                    floor += `A${i}${j} `;
                }
            }
        }
        floor += '\n';
    }

    console.log(floor);
}

solve(["6", "4"]);