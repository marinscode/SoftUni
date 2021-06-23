function piccolo(input) {
    let parkedCars = [];

    for (let line of input) {
        let tokens = line.split(', ');
        let direction = tokens[0];
        let plateNumber = tokens[1];

        if (direction === 'IN' && !parkedCars.includes(plateNumber)) {
            parkedCars.push(plateNumber);
        } else if (direction === 'OUT') {
            if (parkedCars.includes(plateNumber)) {
                let index = parkedCars.indexOf(plateNumber);
                parkedCars.splice(index, 1);
            }
        }
    }

    parkedCars.sort();

    if (parkedCars.length > 0) {
        console.log(parkedCars.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }

}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);