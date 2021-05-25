function solve(arr) {
    for(let i=0; i < arr.length; i++) {
        let originalNum = arr[i];
        let reverseNum = Number(arr[i].toString().split('').reverse().join(''));
        if(originalNum === reverseNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

solve([123,323,421,121]);