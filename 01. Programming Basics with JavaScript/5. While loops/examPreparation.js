function examPrep(input) {
    let badScoreAllowed = Number(input.shift());
    let goodScore = 0;
    let badScore = 0;
    let avgScore = 0;
    let lastExam = '';
    let index = 0;
    let enough = false;

    while (badScore < badScoreAllowed) {
        let exam = input[index];
        let score = Number(input[index + 1]);
        if (exam != 'Enough') {
            lastExam = exam;
        } else {
            enough = true;
            break;
        }

        if (score > 4) {
            goodScore++;
        } else {
            badScore++;
        }

        avgScore += score;

        index += 2;
    }

    let totalExams = badScore + goodScore;

    if (enough) {
        console.log(`Average score: ${(avgScore / totalExams).toFixed(2)}`);
        console.log(`Number of problems: ${totalExams}`);
        console.log(`Last problem: ${lastExam}`);
    } else {
        console.log(`You need a break, ${badScore} poor grades.`);
    }

}

examPrep(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"]);