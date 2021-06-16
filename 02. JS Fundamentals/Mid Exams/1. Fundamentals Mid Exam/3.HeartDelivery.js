function solve(arr) {
    let neighborhood = arr.shift().split("@").map(Number);
    let housesCount = neighborhood.length;
    let line = arr.shift();
    let index = 0;

    while (line != 'Love!') {
        let [jump, length] = line.split(' ');
        index += Number(length);
        if (index >= neighborhood.length) {
            index = 0;
        }

        if (neighborhood[index] <= 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            neighborhood[index] -= 2;

            if (neighborhood[index] == 0) {
                housesCount--;
                console.log(`Place ${index} has Valentine's day.`);
            }
        }



        line = arr.shift();
    }

    console.log(`Cupid's last position was ${index}.`);
    if (housesCount == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${housesCount} places.`);
    }

}

// solve(['10@10@10@2',
//     'Jump 1',
//     'Jump 2',
//     'Love!'
// ]);

solve(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
]);