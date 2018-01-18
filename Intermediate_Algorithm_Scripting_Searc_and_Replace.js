function myReplace(str, before, after) {

    console.log(str);
    console.log(before);
    console.log(after);
    console.log(before[0]);
    if(before[0]>='A'&&before[0]<='Z')
    {
        after=after.replace(after[0],after[0].toUpperCase());
        console.log(after[0].toUpperCase());
    }
    str = str.replace(before, after);
    //var res=str.split(" ");
    console.log(str);
    return str;

}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
