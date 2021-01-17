function worldSwimmingRecord(input) {
    let swimmingRecord = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForSwimming = Number(input[2]);
    let resistanceInSeconds = 12.5;
    let timesResistance = Math.floor(distance / 15);
    let addedSeconds = timesResistance * resistanceInSeconds;
    let playersTime = (distance * secondsForSwimming) + addedSeconds;
    let remainingTime = playersTime - swimmingRecord;

    if( swimmingRecord > playersTime) {
        console.log(`Yes, he succeeded! The new world record is ${playersTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${remainingTime.toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["10464", "1500", "20"]);