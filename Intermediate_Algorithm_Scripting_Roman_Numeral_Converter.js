function convertToRoman(num) {

    var arr = [];
    var str = "";
    while ((num / 10) > 0) {
        console.log(arr = arr.concat(num % 10));
        console.log(num = parseInt(num / 10));
    }
    arr = arr.reverse();//순서 바꾸기
    console.log(arr);//배열에 넣기 까지 성공 오예 오예 오예
    if (arr.length > 3) {
        console.log(arr[0]);
        for (var i = 0; i < arr[0]; i++) {
            str += "M";
        }
        arr.splice(0, 1);
    }
    if (arr.length > 2) {// C CC CCC CD D DC DCC DCCC CM
        console.log(arr[0]);
        if (arr[0] === 1) {
            str += "C";
        } else if (arr[0] === 2) {
            str += "CC";
        } else if (arr[0] === 3) {
            str += "CCC";
        } else if (arr[0] === 4) {
            str += "CD";
        } else if (arr[0] === 5) {
            str += "D";
        } else if (arr[0] === 6) {
            str += "DC";
        } else if (arr[0] === 7) {
            str += "DCC";
        } else if (arr[0] === 8) {
            str += "DCCC";
        } else if (arr[0] === 9) {
            str += "CM";
        }
        arr.splice(0, 1);

    }
    if (arr.length > 1) {// X XX XXX XL L LX LXX LXXX XC
        console.log(arr[0]);
        if (arr[0] === 1) {
            str += "X";
        } else if (arr[0] === 2) {
            str += "XX";
        } else if (arr[0] === 3) {
            str += "XXX";
        } else if (arr[0] === 4) {
            str += "XL";
        } else if (arr[0] === 5) {
            str += "L";
        } else if (arr[0] === 6) {
            str += "LX";
        } else if (arr[0] === 7) {
            str += "LXX";
        } else if (arr[0] === 8) {
            str += "LXXX";
        } else if (arr[0] === 9) {
            str += "XC";
        }
        arr.splice(0, 1);

    }
    //마지막 1개
        console.log(arr[0]);
        if (arr[0] === 1) {
            str += "I";
        } else if (arr[0] === 2) {
            str += "II";
        } else if (arr[0] === 3) {
            str += "III";
        } else if (arr[0] === 4) {
            str += "IV";
        } else if (arr[0] === 5) {
            str += "V";
        } else if (arr[0] === 6) {
            str += "VI";
        } else if (arr[0] === 7) {
            str += "VII";
        } else if (arr[0] === 8) {
            str += "VIII";
        } else if (arr[0] === 9) {
            str += "IX";
        }

    console.log(str);
    return str;
}

convertToRoman(2014);