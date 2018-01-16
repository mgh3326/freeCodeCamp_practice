function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for (var i = 0; i < arr2.length; i++) {
        // console.log(arr1.indexOf(arr2[i]));
        if (arr1.indexOf(arr2[i]) === -1) {
            console.log(arr2.slice(i, i + 1));
            newArr = newArr.concat(arr2.slice(i, i + 1))
        }


    }
    for (i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            console.log(arr1.slice(i, i + 1));
            newArr = newArr.concat(arr1.slice(i, i + 1))
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
    console.log(newArr);
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
