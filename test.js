const reverseString = function(str) {
    console.log(str);
    console.log(str.length);
    let new_str = "";

    for (let i = str.length - 1; i >= 0; i--){
        console.log(i,str[i]);
        new_str += str[i];
    }

    return new_str;
};

console.log(reverseString(""));