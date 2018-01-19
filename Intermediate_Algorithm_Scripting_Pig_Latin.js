function translatePigLatin(str) {
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    console.log(vowel);
    var val=0;
    //모음 출연!
    for(var index=0;index<str.length;index++)
    if (vowel.indexOf(str[index]) > -1)//모음 출연! index를 찾자!
        break;
    if(index===0)//처음부터 모음일 경우
    {
        str+="way";
        console.log(str);
        return str;
    }
    console.log(str[index]);
    var result_str= (str.substr(index));
    console.log(result_str);
    for(var i=0;i<index;i++)
        result_str += str[i];

    result_str+="ay";
    console.log(result_str);
    return result_str;
}

translatePigLatin("consonant");
