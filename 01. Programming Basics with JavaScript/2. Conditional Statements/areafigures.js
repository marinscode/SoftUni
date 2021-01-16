function areas(input) {
    let figure = input[0];
    let a = Number(input[1]);
    let area;

    if(figure === 'square') {
        area = a * a;
    } else if ( figure === 'rectangle') {
        let b = Number(input[2]);
        area = a * b;
    } else if ( figure === 'circle') {
        area = a * a * Math.PI;
    } else if ( figure === 'triangle') {
        let b = Number(input[2]);
        area = (a * b) / 2;
    }

    console.log(area.toFixed(3));
}

areas();