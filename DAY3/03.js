function day(num){
    switch (num) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log('Please Enter a Valid Week Day')
            break;
    }

}

function grades(num){
    switch (true) {
        case (num>90):
            console.log('Your Grade is A');
            break;
        case (num>80):
            console.log('Your Grade is A');
            break;
        case (num>70):
            console.log('Your Grade is A');
            break;
        case (num>60):
            console.log('Your Grade is A');
            break;
        default:
            console.log("You Are Failed");
            break;
    }
}

grades(97)