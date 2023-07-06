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

function getAllDateFormats(date){
    convertDateIntoString(date);
    let ddmmyyyy
    let mmddyyyy
    let yyyymmdd
    let ddmmyy
    let mmddyy
    let yymmdd

    ddmmyyyy=date.day+date.month+date.year;
    mmddyyyy=date.month+date.day+date.year;
    yyyymmdd=date.year+date.month+date.day
    ddmmyy=date.day+date.month+date.year.slice(-2)
    mmddyy=date.month+date.day+date.year.slice(-2)
    yymmdd=date.year.slice(-2)+date.month+date.day

    return [ddmmyyyy,mmddyyyy,yyyymmdd,ddmmyy,mmddyy,yymmdd]
}