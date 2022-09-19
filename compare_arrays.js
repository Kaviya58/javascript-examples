const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4];

//compare two arrays
if(arr1.length != arr2.length){
    console.log('Two arrays are not same.');
}
else{
    let result;
    for(let i = 0 ; i < arr1.length ; i++){
        arr1[i] !== arr2[i] ? result = false : result = true;
    }
    if(result){
        console.log('Two arrays are same.');
    }
    else{
        console.log('Two arrays are not same.');
    }
}