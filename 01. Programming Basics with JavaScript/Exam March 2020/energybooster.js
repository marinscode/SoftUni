function energyBooster(fruit, size, purchasedNumber) {
    let smallSize = {
        'Watermelon': 56,
        'Mango': 36.66,
        'Pineapple': 42.10,
        'Raspberry': 20
    };
    let bigSize = {
        'Watermelon': 28.70,
        'Mango': 19.60,
        'Pineapple': 24.80,
        'Raspberry': 15.20
    }
    let singlePrice;
    let packetSize;

    if (size === 'small') {
        switch(fruit) {
            case 'Watermelon':
                singlePrice = smallSize.Watermelon;
                break;
            case 'Mango':
                singlePrice = smallSize.Mango;
                break;
            case 'Pineapple':
                singlePrice = smallSize.Pineapple;
                break;
            case 'Raspberry':
                singlePrice = smallSize.Raspberry;
                break;
        }
        packetSize = 2;
    }

    if (size === 'big') {
        switch(fruit) {
            case 'Watermelon':
                singlePrice = bigSize.Watermelon;
                break;
            case 'Mango':
                singlePrice = bigSize.Mango;
                break;
            case 'Pineapple':
                singlePrice = bigSize.Pineapple;
                break;
            case 'Raspberry':
                singlePrice = bigSize.Raspberry;
                break;    
        }
        packetSize = 5;
    }

    let pricePerPacket = singlePrice * packetSize;
    let totalPrice = pricePerPacket * purchasedNumber;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85;
    } else if(totalPrice > 1000) {
        totalPrice = totalPrice * 0.5;
    } 

    console.log(totalPrice.toFixed(2) + " lv.");
}

energyBooster('Mango', 'big', 8);