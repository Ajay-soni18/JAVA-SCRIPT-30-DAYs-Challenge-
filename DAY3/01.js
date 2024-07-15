function toCheck (num){
    if(num==0){
        console.log('given number is Zero');
    }
    else if(num>0){
        console.log('Number is Positive');
    }
    else{
        console.log('Number is Negative');
    }
}

function toVote(age){
    if(age>=18){
        console.log('Yes You are eligible for voting');
    }
    else{
        console.log(`Sorry you have to wait for next ${18-age} years`);
    }
}

toCheck(12);
toVote(12);