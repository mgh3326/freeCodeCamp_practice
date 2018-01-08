function sumAll(arr) {
    console.log(arr);
    console.log(Math.max(arr[0], arr[1]));
    console.log(Math.min(arr[0], arr[1]));
    var sum=0;
for(var i =Math.min(arr[0], arr[1]);i<=Math.max(arr[0], arr[1]);i++)
{
    console.log(i);
    sum+=i;
}
console.log("sum: "+sum);
    return sum;
}

sumAll([1, 4]);
