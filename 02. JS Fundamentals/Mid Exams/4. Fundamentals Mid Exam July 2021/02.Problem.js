function solve(arr) {
    let friends = arr.shift().split(", ");
    let line = arr.shift();
    let blacklistedCount = 0;
    let lostNamesCount = 0;

    while (line != 'Report') {
        let [command, ...args] = line.split(" ");

        switch (command) {
            case 'Blacklist':
                let name = args[0];
                if (friends.includes(name)) {
                    blacklistedCount++;
                }
                Blacklist(friends, name);
                break;
            case 'Error':
                let index = args[0];
                if (index >= 0 && friends[index] != "Blacklisted" && friends[index] != "Lost" && index < friends.length) {
                    Error(friends, index);
                    lostNamesCount++;
                }
                break;
            case 'Change':
                let i = args[0];
                let newName = args[1];
                if (i >= 0 && i < friends.length) {
                    Change(friends, i, newName);
                }
                break;
        }

        line = arr.shift();
    }

    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(friends.join(" "));

    function Blacklist(friendsArr, name) {
        let index = friendsArr.indexOf(name);
        if (index >= 0) {
            friendsArr.splice(index, 1, "Blacklisted");
            console.log(`${name} was blacklisted.`);
        } else {
            console.log(`${name} was not found.`);
        }
    }

    function Error(friendsArr, index) {
        if (index >= 0) {
            let name = friendsArr.splice(index, 1, "Lost");
            console.log(`${name} was lost due to an error.`);
        }
    }

    function Change(friendsArr, index, newName) {
        let name = friends[index];
        if (friendsArr.includes(name)) {
            friendsArr.splice(index, 1, newName);
            console.log(`${name} changed his username to ${newName}.`);
        }
    }
}

// solve(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"]);

// solve(["Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"]
// );

solve(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]
);