function solve(input) {
    let cat = input.shift();
    let gender = input.shift();
    let catsMonths = 0;
    let isCorrectCat = true;

    if (gender == 'm') {
        switch (cat) {
            case 'British Shorthair':
                catsMonths = (13 * 12) / 6;
                break;
            case 'Siamese':
                catsMonths = (15 * 12) / 6;
                break;
            case 'Persian':
                catsMonths = (14 * 12) / 6;
                break;
            case 'Ragdoll':
                catsMonths = (16 * 12) / 6;
                break;
            case 'American Shorthair':
                catsMonths = (12 * 12) / 6;
                break;
            case 'Siberian':
                catsMonths = (11 * 12) / 6;
                break;
            default:
                isCorrectCat = false;
                console.log(`${cat} is invalid cat!`);
        }
    }

    if (gender == 'f') {
        switch (cat) {
            case 'British Shorthair':
                catsMonths = (14 * 12) / 6;
                break;
            case 'Siamese':
                catsMonths = (16 * 12) / 6;
                break;
            case 'Persian':
                catsMonths = (15 * 12) / 6;
                break;
            case 'Ragdoll':
                catsMonths = (17 * 12) / 6;
                break;
            case 'American Shorthair':
                catsMonths = (13 * 12) / 6;
                break;
            case 'Siberian':
                catsMonths = (12 * 12) / 6;
                break;
            default:
                isCorrectCat = false;
                console.log(`${cat} is invalid cat!`);
        }
    }

    if (isCorrectCat) {
        console.log(`${Math.floor(catsMonths)} cat months`);
    }
}

solve(["Tom",
    "m"]);