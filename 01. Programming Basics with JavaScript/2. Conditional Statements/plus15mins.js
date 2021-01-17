function timePlus(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let plus15Minutes = minutes + 15;
    let remainingMinutes = plus15Minutes % 60;

    if (plus15Minutes > 59) {
        hours++;
        if (hours > 23) {
            hours = hours % 24;
        }
        if (remainingMinutes < 10) {
            console.log(`${hours}:0${remainingMinutes}`);
        } else {
            console.log(`${hours}:${remainingMinutes}`);
        }
    } else { 
        if (remainingMinutes < 10) {
            console.log(`${hours}:0${remainingMinutes}`);
        } else {
            console.log(`${hours}:${remainingMinutes}`);
        }
    }
}

timePlus(["23", "59"]);