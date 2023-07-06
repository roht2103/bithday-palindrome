function reverseStr(str){
    let charList=str.split('');
    let reverseList=charList.reverse();
    let reverse=reverseList.join('');
    return reverse;
}