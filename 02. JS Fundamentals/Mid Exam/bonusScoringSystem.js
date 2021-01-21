function bonusScoringSystem(input) {
    input = input.map(Number);
    let students = input[0];
    let lectures = input[1];
    let bonusPoints = input[2];
    let maxBonusP = 0;
    let maxAttendace = 0;

    if (students == 0 || lectures == 0) {
        console.log(`Max Bonus: ${maxBonusP}.`);
        console.log(`The student has attended ${maxAttendace} lectures.`);
        return;
    }

    for (let i = 3; i <= input.length; i++) {
        let firstStudentLectures = input[i];
        if (maxAttendace < firstStudentLectures) {
            maxAttendace = firstStudentLectures;
            maxBonusP = Math.round((maxAttendace / lectures) * (5 + bonusPoints));
        }
    }

    console.log(`Max Bonus: ${maxBonusP}.`);
    console.log(`The student has attended ${maxAttendace} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]);