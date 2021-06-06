function solve(arr) {
    let movies = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let contains = function (movieName) {
        let movie = movies.find(m => m.name === movieName);
        return movie;
    }

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command.includes('addMovie')) {
            let name = command.slice(1, command.length).join(' ');
            movies.push(new Movie(name, null, null));
        } else if (command.includes('directedBy')) {
            let name = command.slice(0, command.indexOf('directedBy')).join(' ');
            if (contains(name) !== undefined) {
                let movie = contains(name);
                movie.director = command.slice(command.indexOf('directedBy') + 1, command.length).join(' ');
            }
        } else if (command.includes('onDate')) {
            let name = command.slice(0, command.indexOf('onDate')).join(' ');
            if (contains(name) !== undefined) {
                let movie = contains(name);
                movie.date = command.slice(command.indexOf('onDate') + 1, command.length).join(' ');
            }
        }
    }

    movies.forEach(m => m.director != null && m.name != null && m.date != null ? console.log(JSON.stringify(m)) : null);
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);