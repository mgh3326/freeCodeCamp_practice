
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    console.log(str.substring(str.length-target.length,str.length));
    if(str.substring(str.length-target.length,str.length)===target)
        return true;
    else
        return false;
    //return str;
}

confirmEnding("Bastian", "n");
