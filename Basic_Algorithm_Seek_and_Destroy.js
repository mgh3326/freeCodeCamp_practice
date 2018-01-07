var n1,n2,n3;
function isBigEnough(value) {
        return value !==n1&&value!==n2;
}
function temp(value) {

        return value !==n1&&value!==n2&&value!==n3;


}
function destroyer(arr) {//필터 이거 어떻게 쓰는지 다시 공부 해야겠다.
    // Remove all the values
    args = Array.from(arguments);
    for(var i=0;i<args.length;i++)
    console.log(args[i]);
    n1=args[1];
    n2=args[2];
    if(args.length===4)
    {
        n3=args[3];
        arr=args[0].filter(temp);
    }
    else
    arr=args[0].filter(isBigEnough);
    console.log(arr);
    // for(var i=0;i<arr.length;i++)
    // console.log(arr[arr.length-1-i]);
    // console.log(arr.indexOf(arr[arr.length-1]));
    return arr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

