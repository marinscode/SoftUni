function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (day !== 'Sunday') {
        if (hour >= 10 && hour <= 18) {
            console.log('open');
        } else {
            console.log('closed');
        }
    } else {
        console.log('closed');
    }
}

workingHours(["11", "Monday"]);