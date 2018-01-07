function getIndexToIns(arr, num) {
    var oh=[];
    console.log(arr);
    oh=arr.sort(function(a,b)//js에서는 sort를 정말 신기하게 사용하는구나
    {
        return a-b;
    });
    console.log(oh);
    for(var i=0;i<oh.length;i++)
    {
        if(oh[i]>=num)
        {
            console.log(i);
            return i;

        }
    }
    // Find my place in this sorted array.
    return oh.length;
}

getIndexToIns([2, 20, 10], 19);