function readText(input) {
    let word = input.shift();

    while( word != 'Stop') {
        console.log(word);
        word = input.shift();
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
;