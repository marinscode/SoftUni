function scholarship(input) {
    let income = Number(input[0]);
    let avarageGrade = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScholarship = minSalary * 0.35;
    let excellentScholarship = avarageGrade * 25;

    if (income < minSalary && avarageGrade >= 4.50) {
        if (avarageGrade >= 5.50) {
            if (socialScholarship <= excellentScholarship) {
                console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
            } else {
                console.log(`You get a Social scholarship ${socialScholarship} BGN`);
            }
        } else {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`);
        }
    } else {
        if (avarageGrade >= 5.50) {
            console.log(`You get a scholarship for excellent results ${excellentScholarship} BGN`);
        } else {
            console.log("You cannot get a scholarship!");
        }
    }

}

scholarship(["300.00","5.65","420.00"]);
