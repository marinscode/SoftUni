function solve(obj) {
    let car = {};
    
    car.model = obj.model;
    if ( obj.power <= 90) {
        car.engine = { power: 90, volume: 1800};
    } else if ( obj.power > 90 && obj.power <= 120) {
        car.engine = { power: 120, volume: 2400};
    } else if ( obj.power > 120 && obj.power <= 200) {
        car.engine = { power: 200, volume: 3500};
    }

    if(obj.carriage == 'hatchback') {
        car.carriage = {type: 'hatchback', color: obj.color};
    } else if ( obj.carriage == 'coupe') {
        car.carriage = {type: 'coupe', color: obj.color};
    }

    if(obj.wheelsize % 2 == 0) {
        car.wheels = Array(4).fill(obj.wheelsize - 1);
    } else {
        
        car.wheels = Array(4).fill(obj.wheelsize);
    }

    return car;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));