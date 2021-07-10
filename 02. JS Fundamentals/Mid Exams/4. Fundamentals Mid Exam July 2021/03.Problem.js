function solve(input) {
    let phones = input.shift().split(", ");
    let line = input.shift();

    while (line != "End") {
        let [command, ...params] = line.split(" - ");

        switch (command) {
            case 'Add':
                Add(...params);
                break;
            case 'Remove':
                Remove(...params);
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = params[0].split(":");
                BonusPhone(oldPhone, newPhone);
                break;
            case 'Last':
                Last(...params);
                break;
        }

        line = input.shift();
    }

    function Add(phone) {
        if (!phones.includes(phone)) {
            phones.push(phone);
        }
    }

    function Remove(phone) {
        let index = phones.indexOf(phone);
        if (index != -1) {
            phones.splice(index, 1);
        }
    }

    function BonusPhone(oldPhone, newPhone) {
        let index = phones.indexOf(oldPhone);
        if (index != -1) {
            phones.splice(index + 1, 0, newPhone);
        }
    }

    function Last(phone) {
        let index = phones.indexOf(phone);
        if (index != -1) {
            let temp = phones.splice(index, 1);
            phones.push(temp);
        }
    }

    console.log(phones.join(", "));
}

// solve(["SamsungA50, MotorolaG5, IphoneSE",
//     "Add - Iphone10",
//     "Remove - IphoneSE",
//     "End"]);

solve(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "Last - HuaweiP10",
    "End"]);