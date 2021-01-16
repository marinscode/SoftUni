function ChristmasTournament(input) {
    let days = Number(input.shift());
    let wonGames = 0;
    let lostGames = 0;
    let totalMoney = 0;
    let wonDays = 0;
    let lostDays = 0;
    let dailyMoney = 0;
    let command;

    for(let i = 1; i <= days; i++) {
        while((command = input.shift()) !== "Finish") {
            if(command === "win") {
                wonGames++;
                dailyMoney += 20;
            } else if (command === "lose") {
                lostGames++;
            }

        }
        if (wonGames > lostGames) {
            dailyMoney *= 1.10;
            totalMoney += dailyMoney;
            wonDays++;
        } else {
            totalMoney += dailyMoney;
            lostDays++;
        }
        
        dailyMoney = 0;
        wonGames = 0;
        lostGames = 0;
    }

    if(wonDays > lostDays) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}

ChristmasTournament([3,
    'darts',
    'lose',
    'handball',
    'lose',
    'judo',
    'win',
    'Finish',
    'snooker',
    'lose',
    'swimming',
    'lose',
    'squash',
    'lose',
    'table tennis',
    'win',
    'Finish',
    'volleyball',
    'win',
    'basketball',
    'win',
    'Finish'
    ]);