function fearNotLetter(str) {
    var res="";
    for(var i=0;i<str.length-1;i++)
    {
        if(str.charCodeAt(i+1)-str.charCodeAt(i)>1)
        {

            for(var j=0;j<str.charCodeAt(i+1)-str.charCodeAt(i)-1;j++)
            {

                console.log(res+=String.fromCharCode(str.charCodeAt(i)+j+1));
            }
        }
        console.log(str.charCodeAt(i+1)-str.charCodeAt(i));
    }
    if(res===""){
        res=undefined;
    }
    console.log(res);

    return res;
}

fearNotLetter("abce");
