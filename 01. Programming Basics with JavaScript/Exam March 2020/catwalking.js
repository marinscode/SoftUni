function catWalking(minutesWalking, timesPerDay, caloriesPerDay) {
    let burnedCalories = minutesWalking * timesPerDay * 5;
    
    if (burnedCalories >= (caloriesPerDay / 2)) {
        console.log("Yes, the walk for your cat is enough. Burned calories per day: " + burnedCalories + ".");
    } else {
        console.log("No, the walk for your cat is not enough. Burned calories per day: " + burnedCalories + ".");
    }
}

catWalking(40,2,300);