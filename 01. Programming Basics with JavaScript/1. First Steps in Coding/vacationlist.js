function vacationList(input) {
    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalHours = totalPages/pagesPerHour;
    let result = totalHours / days;
    console.log(result);
}

vacationList(["432",
"15",
"4"]);