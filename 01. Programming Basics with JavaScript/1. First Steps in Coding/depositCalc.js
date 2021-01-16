function depositCalc(input) {
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let interestRate = Number(input[2]);

    let interest = ((deposit * (interestRate/100) ) / 12) * months;
    let result = deposit + interest;
    console.log(result.toFixed(2));
}

depositCalc(["200",
"3",
"5.7"]);