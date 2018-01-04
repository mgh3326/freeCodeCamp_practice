function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    var temp=str.length;
    var i=0;
    while(1)
    {
        console.log("i : "+i+"str :"+str);
        if ((str.charAt(i) < 'a' || str.charAt(i) > 'z')&&(str.charAt(i) < '0' || str.charAt(i) > '9'))
        {
            str = str.replace(str.substr(i, 1), '');
            i=0;
            continue;
        }
        if(i===str.length-1)
            break;
        i++;
    }

    if (str.length % 2 === 0)//짝수일때
    {
        console.log(str+" "+str.length);
        for (i = 0; i < str.length/2; i++)//replace
        {
            if(str.charAt(i)!==str.charAt(str.length-1-i))
                return false;
        }
    }
    else
    {
        //console.log(str);
        for (i = 0; i < str.length/2-1; i++)//replace
        {
            //console.log(str.charAt(i)+" "+str.charAt(str.length-1-i));
            if(str.charAt(i)!==str.charAt(str.length-1-i))
                return false;
        }
    }
    //console.log(str);
    return true;
}


//palindrome("eye");
console.log(palindrome("1 eye for of 1 eye."));
