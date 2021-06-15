function solve([firstEmp, secondEmp, thirdEmp, totalPeople]) {
    let totalTime = 0;

    while(totalPeople > 0) {
        totalTime++;

        if(totalTime % 4 == 0 ) {
            continue;
        }
        totalPeople -= firstEmp;
        totalPeople -= secondEmp;
        totalPeople -= thirdEmp;
    }

    console.log(`Time needed: ${totalTime}h.`);
}

solve([1,
    2,
    3,
    45
]);