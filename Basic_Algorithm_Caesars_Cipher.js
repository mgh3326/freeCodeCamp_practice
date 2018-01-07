function rot13(str) { // LBH QVQ VG!
    for (var i = 0; i < str.length; i++) {
        console.log(str.charCodeAt(i));

    }
    var oh = new String();

    //oh.fromCharCode(65,66,67);
    console.log(oh);
//     console.log(str.charCodeAt(0));//A : 65 N : 78 Z : 90
    // console.log(str.charCodeAt("N"));

    return str;
}

// Change the inputs below to test
rot13("NERR PBQR PNZC");
