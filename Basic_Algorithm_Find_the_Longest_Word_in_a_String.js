
function findLongestWord(str) {
    var arr=str.split(' ');
    var max=arr[1].length;
    for(var i=1;i<arr.length;i++)
    {
        console.log(arr[i]);
        if(arr[i].length>max)
            max=arr[i].length;
    }
    return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
