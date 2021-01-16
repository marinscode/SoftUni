function mountainRun(recordInSeconds, distance, timeForMeter) {
    let time = distance * timeForMeter;
    let slowingDownTime = Math.floor(distance / 50 ) * 30;
    let totalTime = time + slowingDownTime;
    let remainingTime = totalTime - recordInSeconds;

    if (recordInSeconds > totalTime) {
        console.log("Yes! The new record is " + totalTime.toFixed(2) + " seconds.");
    } else {
        console.log("No! He was " + remainingTime.toFixed(2) + " seconds slower.");
    }
}

mountainRun(5554.34,1340,3.23);