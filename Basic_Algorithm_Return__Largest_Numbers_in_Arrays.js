
function largestOfFour(arr) {
    // You can do this!
    for(var i=0;i<arr.length;i++)
    {
        var max=arr[i][0];
        for(var j=1;j<arr[i].length;j++)
        {
            if(max<arr[i][j])
                max=arr[i][j];
            console.log(arr[i][j]);
        }
        arr[i]=max;
        console.log("");
    }
    return arr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

