function largest(x,y,z){
    if(x>y){
        if(x>z){
            console.log(`${x} is the greatest Number`)
        }
    }
    if(y>x){
        if(y>z){
            console.log(`${y} is the greatest number`)
        }
        else{
            console.log(`${z} is the greatest number`)
        }
    }
}

largest(1,5,3);