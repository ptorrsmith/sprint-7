
function go() {

    // alert(min(40,5));
    // alert(isEven(-2));
    // alert(countBs("CBBCBBCBBCBBCBB CBBjh"));
    alert(countChar("kakkerlak", "k"));

}

function min (a, b) {
    return (a < b) ? a : b;
}

function isEven(n) {
    let result = Math.abs(n);
    if (Math.abs(n) == 0) {return true}
    else if (Math.abs(n) == 1) {return false}
    else {
        return isEven(Math.abs(n)-2)
    }
}


function countBs(text) {

    function getBCount (total, letter) {
        return total + (letter == 'B' ? 1 : 0);
    }

    return text.split('').reduce(getBCount,0);
}

function countChar(text, char) {
    function getCharCount (totalChars, currentChar) {
        return totalChars + (currentChar == char ? 1 : 0);
    }

    return text.split('').reduce(getCharCount,0);
}