function solve(input) {
    let spaceWidth = Number(input.shift());
    let spaceLength = Number(input.shift());
    let spaceHight = Number(input.shift());
    let averageAstrounatsHight = Number(input.shift());

    let totalSpace = spaceHight * spaceLength * spaceWidth;
    let roomSpace = 2 * 2 * (averageAstrounatsHight + 0.40);
    let astrounats = Math.floor(totalSpace / roomSpace);

    if (astrounats >= 3 && astrounats <= 10) {
        console.log(`The spacecraft holds ${astrounats} astronauts.`);
    } else if (astrounats < 3) {
        console.log('The spacecraft is too small.');
    } else if (astrounats > 10) {
        console.log('The spacecraft is too big.');
    }
}

solve(["4.5",
    "4.8",
    "5",
    "1.75"]);