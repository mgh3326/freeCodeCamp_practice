function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (num > 3)//3보다 클때
    {
        if (str.length > num) {
            str = str.substr(0, num - 3) + "...";
        }
    }
    else//3보다 작거나 같을 때
    {
        str=str.substr(0,num)+"...";
    }
    console.log(str);
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
