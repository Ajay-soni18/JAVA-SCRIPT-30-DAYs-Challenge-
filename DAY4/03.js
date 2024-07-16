let i = 1;
do{
    console.log(i);
    i++;
}while(i!=6)


function factorial(num){
    if(num===0) return console.log(1);
    let ans=1;
    do{
        ans*=num;
        num--;
    }while(num!=0);
    console.log(ans);
}

factorial(0);
