
function pairElement(str) {
    var arr=[];
    for(var i=0;i<str.length;i++)
    {
        console.log(str[i]);
        if(str[i]==='G')
        {
            arr.push(["G","C"]);
        }
        else if(str[i]==='C')
        {
            arr.push(["C","G"]);
        }
        else if(str[i]==='A')
        {
            arr.push(["A","T"]);
        }
        else if(str[i]==='T')
        {
            arr.push(["T","A"]);
        }

    }
    console.log(arr);
    return arr;
}

pairElement("GCG");
