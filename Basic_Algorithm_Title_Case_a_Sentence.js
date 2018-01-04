function titleCase(str) {
    str=str.toLowerCase();
    var arr=str.split(" ");
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1);
        console.log(arr[i]);

    }
    str=arr.join(" ");
    console.log(str);
    return str;
}

titleCase("I'm a little tea pot");