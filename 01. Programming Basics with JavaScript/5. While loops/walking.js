function solve(input) {
    let steps = 0;
    let line = input.shift();

    while (line != undefined) {
        if( line != 'Going home') {
            steps += Number(line);
        }
        line = input.shift();
    }

    if(line == 'Going home') {
        steps += Number(input.shift());
    }

    if( steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps-10000} steps over the goal!`);
    } else {
        console.log(`${10000-steps} more steps to reach goal.`)
    }
}

solve(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);