function bonusPoints(input) {
    let points = Number(input[0]);
    let bonusPoints = 0;

    if (points > 1000) {
        bonusPoints = points * 0.1;
    } else if ( points > 100) {
        bonusPoints = points * 0.2;
    } else if (points <= 100 ) {
        bonusPoints = 5;
    }

    if ( points % 2 == 0 ) {
        bonusPoints += 1; 
    } else if ( points % 5 == 0) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(points + bonusPoints);
}   

bonusPoints(["175"]);