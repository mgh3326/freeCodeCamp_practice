function factorialize(num) {
//console.log(num);
    if (num === 0)
        return 1;
    var temp = num;
    for (var i = 1; i < temp; i++) {
        num *= (i);
    }
    //console.log(num);
    return num;
}

factorialize(5);