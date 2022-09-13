/*
Returns the integer position of a
search string in an array of strings if found. If the string is not found, the function
returns -1. The string matches are case insensitive.
Example:
strArr = ["apple","banana","orange"]
str = "banana"
Result: 1
*/

function caseInsensitiveStringSearch(strArray, str){

    for (i = 0; i < strArray.length; i++){
        if (strArray[i].toUpperCase() === str.toUpperCase()){
            return i;
        }
    }
    return -1;

}

function testing(){
    var strArray = ["banana", "apple", "GrApE"];
    var str1 = "BANANA";
    var str2  = "orange"
    console.log (caseInsensitiveStringSearch(strArray, str1) == 0);
    console.log (caseInsensitiveStringSearch(strArray, str2) == -1);
}

testing();