
function chunkArrayInGroups(arr, size) {
    // Break it up.
    arr.slice(0,size);
    var oh="";
    console.log(arr.slice(0,size));
    console.log(arr.slice(size,size*2));
    console.log(arr.slice(size*2));
    //console.log(arr.slice(size*3));

    // for(var i=0;i<size;i++)
    // {
    //
    //     console.log(arr.slice(size*i,size*(i+1)));
    // }
    //console.log(oh);
    return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5,6], 2);