var fruits = [false, null, 0, undefined, NaN];
function bouncer(arr) {
var my="";
    console.log(arr);
    for(var i=0;i<arr.length;i++)
    {
        if(((fruits.indexOf(arr[i]))>-1))
        {
            console.log("remove : "+arr[i]);
            arr.splice(i,1);
            i--;
            continue;
        }
        if(arr[i]===""||arr[i].toString()==="NaN")
        {
            arr.splice(i,1);
            i--;
            continue;

        }
        console.log(arr[i]);
    }
    console.log(arr);
    // Don't show a false ID to this bouncer.
    return arr;
}

bouncer([false, null, 0, NaN, undefined, ""]);