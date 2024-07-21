function check ( num){
    if(num%2==0){
        console.log("Number is Even")
    }
    else {
        console.log("Number is odd")
    }
}

function calculate(nums){
    console.log(`Square of ${nums} is ${nums*nums}`);
}

check(6);
calculate(6);