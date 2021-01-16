function fitnessCard(amount, gender, age, sport) {
    let men = {
        'gym': 42,
        'boxing': 41,
        'yoga': 45,
        'zumba': 34,
        'dances': 51,
        'pilates': 39
    };
    let women = {
        'gym': 35,
        'boxing': 37,
        'yoga': 42,
        'zumba': 31,
        'dances': 53,
        'pilates': 37
    };

    let price = 0;

    if( gender === 'm') {
        price = men[sport.toLowerCase()];
    } else if ( gender === 'f') {
        price = women[sport.toLowerCase()];
    }

    if (age <= 19 ) {
        price = price * 0.80;
    }

    if (amount > price) {
        console.log("You purchased a 1 month pass for " + sport + ".");
    } else {
        console.log("You don't have enough money! You need $" + (price - amount).toFixed(2) + " more.");
    }
};

fitnessCard(50,'m',23,"Gym");