
function reverseString(str) {
    var array=str.split('');
    //console.log(str);
    array.reverse();
    str=array.join('');
    //console.log(str);
    return str;
}

reverseString("hello");
