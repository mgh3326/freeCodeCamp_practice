function rot13(str) { // LBH QVQ VG!
    var oh="";
    for (var i = 0; i < str.length; i++) {
        if(str.charCodeAt(i)<78&&str.charCodeAt(i)>64)
        {
            oh+= String.fromCharCode(str.charCodeAt(i)+13);
        }
        else if(str.charCodeAt(i)>=78&&str.charCodeAt(i)<91)
        {
            oh+= String.fromCharCode(str.charCodeAt(i)-13);
        }
        else{
            oh+= String.fromCharCode(str.charCodeAt(i));
        }
        //console.log(str.charCodeAt(i));
    }


    //var oh= String.fromCharCode(65,66,67);

    console.log(oh);
//     console.log(str.charCodeAt(0));//A : 65 N : 78 Z : 90
    // console.log(str.charCodeAt("N"));

    return oh;
}

// Change the inputs below to test
rot13("NERR PBQR PNZC");
