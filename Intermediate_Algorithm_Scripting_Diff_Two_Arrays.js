
function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for(var i=0;i<arr2.length;i++)
    {
        if(arr1.indexOf(arr2[i])===-1)
        {
            console.log(arr2[i]);
        }

    }
    // for(i=0;i<arr1.length;i++)
    // {
    //     if(arr2.indexOf(arr1[i])===-1)
    //     {
    //         console.log(arr1[i]);
    //     }
    //
    // }
    return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
