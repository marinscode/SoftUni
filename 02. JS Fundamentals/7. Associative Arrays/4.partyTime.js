function partyTime(input) {
    let vipGuests = [];
    let regularGuests = [];
    let reservation = input.shift();

    while( reservation != 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuests.push(reservation);
        } else {
            regularGuests.push(reservation);
        }

        reservation = input.shift();
    }

    for ( let guest of input) {
        if(vipGuests.indexOf(guest) >= 0) {
            vipGuests.splice(vipGuests.indexOf(guest), 1);
        }
        if(regularGuests.indexOf(guest) >= 0) {
            regularGuests.splice(regularGuests.indexOf(guest), 1);
        }
    }

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.forEach(guest => console.log(guest));
    regularGuests.forEach(guest => console.log(guest));
    
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']);