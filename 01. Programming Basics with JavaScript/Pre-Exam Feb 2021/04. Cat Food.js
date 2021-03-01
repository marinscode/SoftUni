function solve(input) {
    let catNum = Number(input.shift());
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalFood = 0;

    for (let i = 0; i < catNum; i++) {
        let food = Number(input[i]);
        if (food >= 100 && food < 200) {
            group1++;
            totalFood += food;
        } else if (food >= 200 && food < 300) {
            group2++;
            totalFood += food;
        } else if (food >= 300 && food < 400) {
            group3++;
            totalFood += food;
        }
    }

    console.log(`Group 1: ${group1} cats.`);
    console.log(`Group 2: ${group2} cats.`);
    console.log(`Group 3: ${group3} cats.`);
    console.log(`Price for food per day: ${((totalFood / 1000) * 12.45).toFixed(2)} lv.`);
}

solve(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"]);