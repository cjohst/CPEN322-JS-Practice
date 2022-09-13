/*
Combines two arrays by alternatively taking
elements. The two arrays can have different lengths.
Input: arrA = ["a","b","c"], arrB = [1, 2]
Result = ["a", "1", "b", "2", "c"]
*/

function combineArray(arr1, arr2) {
    var res;
    if (arr1.length >= arr2.length){
        res = combineArrayHelper(arr1, arr2, res);
    }

    else {
       res = combineArrayHelper(arr2, arr1, res);
    }

    for (i = 0; i < res.length; i++){
        res[i] = res[i].toString();
    }

    return res;

}

function combineArrayHelper(arr1, arr2, res){

    res = arr1;
    var n = 1;
    for (i = 0; i < arr2.length; i++){
        res.splice(n, 0, arr2[i]);
        n+=2;
    }

    return res;

}

function testing(){

    arrA = ["a","b","c"];
    arrB = [1, 2];
    Result = ["a", "1", "b", "2", "c"];
    test = combineArray(arrA, arrB);

    console.log("Your Result:    ",test);
    console.log("Required Result:", Result);

    
    
    

}

testing();