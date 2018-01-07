function mutation(arr) {
    arr[0]=arr[0].toLowerCase();
    arr[1]=arr[1].toLowerCase();

    for(var i=0;i<arr[1].length;i++)
    {
        console.log("arr[0] : "+arr[0]+"arr[1]["+i+"]"+arr[1][i]);
        console.log(arr[0].indexOf(arr[1][i]));
        if(arr[0].indexOf(arr[1][i])===-1)
            return false;
    }

    console.log(arr);
    return true;
}

mutation(["hello", "ellh"]);
