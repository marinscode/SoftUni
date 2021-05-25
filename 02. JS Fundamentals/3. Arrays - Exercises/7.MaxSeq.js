function solve(array) {
    let result = [];
    let finalIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let currentEl = array[i];
        let currentSequence = [currentEl];
        for (let j = i + 1; j < array.length; j++) {
            let nextEl = array[j];

            if (nextEl === currentEl) {
                currentSequence.push(nextEl);
            } else {
                break;
            }
        }

        if (currentSequence.length > result.length) {
            result = [];
            for (let j = 0; j < currentSequence.length; j++) {
                result.push(currentSequence[j]);
            }
        } else if (currentSequence.length === result.length) {
            if (i < finalIndex) {
                finalIndex = i;
            }
        }
    }
    console.log(result.join(" "));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);