function solve(people, type, day) {
    let totalPrice = 0;
    if (day === 'Friday') {
        if (type === 'Students') {
            totalPrice = people * 8.45;
            if (people >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === 'Business') {
            totalPrice = people * 10.90;
            if (people >= 100) {
                totalPrice -= (10 * 10.90);
            }
        } else if (type === 'Regular') {
            totalPrice = people * 15;
            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
        }
    } else if (day === 'Saturday') {
        if (type === 'Students') {
            totalPrice = people * 9.80;
            if (people >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === 'Business') {
            totalPrice = people * 15.60;
            if (people >= 100) {
                totalPrice -= (10 * 15.60);
            }
        } else if (type === 'Regular') {
            totalPrice = people * 20;
            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
        }
    } else if (day === 'Sunday') {
        if (type === 'Students') {
            totalPrice = people * 10.46;
            if (people >= 30) {
                totalPrice *= 0.85;
            }
        } else if (type === 'Business') {
            totalPrice = people * 16;
            if (people >= 100) {
                totalPrice -= (10 * 16);
            }
        } else if (type === 'Regular') {
            totalPrice = people * 22.50;
            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

solve(30,
    "Students",
    "Sunday"
);