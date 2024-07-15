let x=10;
let y=20;
let z=30;

function check (x,y,z){
    if(x>y && x>z){
        console.log(`${x} is the greatest no. among them`)
    }
    else console.log('Not Greatest no.')
}
//check(x,y,z);
check(10,5,6)

if(x!=y) console.log(`${x} and ${y} is not equal number `);

if(x>y || z>y) console.log("condition working");