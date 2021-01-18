function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);
    let examTotalMinutes = (examHour * 60) + examMinute;
    let arrivalTotalMinutes = (arrivalHour * 60) + arrivalMinute;
    let timeDifference = arrivalTotalMinutes - examTotalMinutes;
    let lateHours = Math.floor(Math.abs(timeDifference) / 60);
    let lateMinutes = Math.abs(timeDifference) % 60;

    if (timeDifference >= -30 && timeDifference <= 0) {
        console.log('On time');
    } else if (timeDifference > 0) {
        console.log('Late');
    } else if (timeDifference < -30) {
        console.log('Early')
    }

    if (timeDifference != 0) {
        if (timeDifference <= -1 && timeDifference >= -59) {
            console.log(`${Math.abs(lateMinutes)} minutes before the start`);
        } else if (timeDifference <= -60) {
            if (lateMinutes < 10) {
                console.log(`${lateHours}:0${lateMinutes} hours before the start`);
            } else {
                console.log(`${lateHours}:${lateMinutes} hours before the start`);
            }
        }
        if (timeDifference >= 1 && timeDifference <= 59) {
            console.log(`${Math.abs(lateMinutes)} minutes after the start`);
        } else if (timeDifference >= 60) {
            if (lateMinutes < 10) {
                console.log(`${lateHours}:0${lateMinutes} hours after the start`);
            } else {
                console.log(`${lateHours}:${lateMinutes} hours after the start`);
            }
        }
    }
}

onTimeForExam(["11",
    "30",
    "8",
    "12"]
);