function solve(password) {
    let rightLength = isLongEnough(password);
    let onlyCharsAndDigits = isOnlyCharsAndDigits(password);
    let isAtLeast2Digits = has2Digits(password);

    if (!rightLength) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!onlyCharsAndDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isAtLeast2Digits) {
        console.log('Password must have at least 2 digits');
    }

    if (rightLength && onlyCharsAndDigits && isAtLeast2Digits) {
        console.log("Password is valid");
    }


    function isLongEnough(pass) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isOnlyCharsAndDigits(pass) {
        let isValid = true;
        for (let char of pass) {
            let charValue = char.charCodeAt();
            if ((charValue >= 48 && charValue <= 57) ||
                (charValue >= 65 && charValue <= 90) ||
                (charValue >= 97 && charValue <= 122)) {
                continue;
            } else {
                isValid = false;
            }
        }

        if (isValid) {
            return true;
        } else {
            return false;
        }
    }

    function has2Digits(pass) {
        let digits = 0;
        for (let char of pass) {
            if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
                digits++;
            }
        }
        if (digits >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

// solve('logIn');
// console.log("----------");
// solve('MyPass123');
// console.log("----------");
solve('Pa$s$s');