function solve(input) {
    let movieName = input.shift();
    let kids = 0;
    let students = 0;
    let standards = 0;
    let totalTickets = 0;

    while (movieName !== 'Finish') {
        let capacity = Number(input.shift());
        let typeTicket = input.shift();
        totalTickets = 0;

        while (typeTicket != "End") {
            if (typeTicket == 'standard') {
                standards++;
            } else if (typeTicket == 'kid') {
                kids++;
            } else if (typeTicket == 'student') {
                students++;
            }
            totalTickets++;

            if (totalTickets >= capacity) {
                break;
            }
            typeTicket = input.shift();
        }
        console.log(`${movieName} - ${(totalTickets / capacity * 100).toFixed(2)}% full.`);
        movieName = input.shift();
    }
    totalTickets = kids + students + standards;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(students / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standards / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kids / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);