function reverseStr(str){
    let charList=str.split('');
    let reverseList=charList.reverse();
    let reverse=reverseList.join('');
    return reverse;
}

function isPalindrome(str){
    let rev=reverseStr(str);
    return rev===str?true:false;
}