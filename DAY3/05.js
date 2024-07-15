function checkLeap(year) {
    if (year % 4 !== 0) {
        console.log(`${year} is Not a Leap Year`);
    } else if (year % 100 !== 0) {
        console.log(`${year} is a Leap Year`);
    } else if (year % 400 === 0) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is Not a Leap Year`);
    }
}

checkLeap(2000);