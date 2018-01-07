
function chunkArrayInGroups(arr, size) {
    // Break it up.
    //arr.slice(0,size);
    var oh=[];
    // console.log(arr.slice(0,size));
    // oh.push(arr.slice(0,size));
    // console.log(arr.slice(size,size*2));
    // oh.push(arr.slice(size,size*2));
    //
    // console.log(arr.slice(size*2));
    // oh.push(arr.slice(size*2));

    //console.log(arr.slice(size*3));
console.log(arr.length);
    for(var i=0;i<arr.length;i++)
    {
        //console.log("test : "+arr[size*i]);
        if(arr[size*i]!==undefined)
        {
            console.log(arr.slice(size*i,size*(i+1)));
            oh.push(arr.slice(size*i,size*(i+1)));
        }



    }
    if(arr[size*arr.length+1]!==undefined)
    {
        console.log(arr.slice(size*arr.length));
        oh.push(arr.slice(size*arr.length));
    }

    console.log(oh);
    return oh;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);