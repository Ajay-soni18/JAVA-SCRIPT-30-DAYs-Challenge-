let calculate = (nums1 , nums2)=> {
    console.log(nums1+nums2);
}
calculate(2,3);

let check = (str,char)=>{
    for(i=0;i<str.length;i++){
        if(str[i]===char) return true;
    }
    return false;
}

console.log(check("AJAYSONI Ji","0"));