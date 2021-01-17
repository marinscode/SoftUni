function metricConverter(input) {
    let distance = Number(input[0]);
    let initialMetric = input[1];
    let finalMetric = input[2];
    let result = 0;

    if (initialMetric == 'mm') {
        if (finalMetric == 'cm') {
            result = distance / 10;
        } else if (finalMetric == 'm') {
            result = distance / 1000;
        }
    } else if (initialMetric == 'cm') {
        if (finalMetric == 'mm') {
            result = distance * 10;
        } else if (finalMetric == 'm') {
            result = distance / 100;
        }
    } else if (initialMetric == 'm') {
        if (finalMetric == 'cm') {
            result = distance * 100;
        } else if (finalMetric == 'mm') {
            result = distance * 1000;
        }
    }

    console.log(result.toFixed(3));
}

metricConverter(["12","mm","m"]);