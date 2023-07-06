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
let date={
    day:12,
    month:2,
    year:2022
}
function convertDateIntoString(date){
    if (date.day<10) {
        date.day='0'+date.day
    }else{
        date.day=String(date.day)
        
    }

    if(date.month<10){
        date.month='0'+date.month
    }
    else{
        date.month=String(date.month);
    }

    date.year=String(date.year)
    return date;
}