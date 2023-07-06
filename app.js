function reverseStr(str) {
  let charList = str.split("");
  let reverseList = charList.reverse();
  let reverse = reverseList.join("");
  return reverse;
}

function isPalindrome(str) {
  let rev = reverseStr(str);
  return rev === str;
}

let result;

function convertDateIntoString(date) {
  if (date.day < 10) {
    date.day = "0" + date.day;
  } else {
    date.day = String(date.day);
  }

  if (date.month < 10) {
    date.month = "0" + date.month;
  } else {
    date.month = String(date.month);
  }

  date.year = String(date.year);
  return date;
}

function getAllDateFormats(date) {
  convertDateIntoString(date);
  let ddmmyyyy;
  let mmddyyyy;
  let yyyymmdd;
  let ddmmyy;
  let mmddyy;
  let yymmdd;

  ddmmyyyy = date.day + date.month + date.year;
  mmddyyyy = date.month + date.day + date.year;
  yyyymmdd = date.year + date.month + date.day;
  ddmmyy = date.day + date.month + date.year.slice(-2);
  mmddyy = date.month + date.day + date.year.slice(-2);
  yymmdd = date.year.slice(-2) + date.month + date.day;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

function checkPalindrome(date) {
  let allFormatDates = getAllDateFormats(date);
  console.log(allFormatDates);
  for (let index = 0; index < allFormatDates.length; index++) {
    result = isPalindrome(allFormatDates[index]);
    // console.log(result);
    // console.log(index);
    if (result == true) {
      break;
    }
  }

  return result;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    //checks feb month for leap year
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    //checks that day exceeds max days in month
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }
  if (month > 12) {
    month = 1;
    year++;
  }

  return { day: day, month: month, year: year };
}

function getNextPalindromeDate(date) {
  let counter = 0;
  var nextDate = getNextDate(date);

  while (1) {
    counter++;
    var isPalindrome = checkPalindrome(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [counter, nextDate];
}

function getPreviousDate(date) {
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 3) {
    if (isLeapYear(year)) {
      if (day < 1) {
        day = 29;
        month--;
      }
    } else {
      if (day < 1) {
        day = 28;
        month--;
      }
    }
  } else {
    if (day < 1) {
      month--;
      if (month < 1) {
        month = 12;
        year--;
      }
      day = daysInMonth[month - 1];
    }
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function getPreviousPalindromeDate(date) {
  var ctr = 0;
  var previousDate = getPreviousDate(date);

  while (1) {
    ctr++;
    var isPreviousPalindrom = checkPalindrome(previousDate);
    if (isPreviousPalindrom) {
      break;
    }
    previousDate = getPreviousDate(previousDate);
  }

  return [ctr, previousDate];
}

function checkAnotherDate(date) {}

function formHandeller(e) {
  e.preventDefault();
  output.style.visibility = "inherit";
  let bDayStr = inputDate.value;

  if (inputDate !== "") {
    var listOfDate = bDayStr.split("-");
    let date = {
      day: Number(listOfDate[2]),
      month: Number(listOfDate[1]),
      year: Number(listOfDate[0]),
    };
    result = checkPalindrome(date);
    console.log(result);
    if (result) {
      console.log("palindrome");
      output.innerHTML = "Yay!🤩Your birthday 🎂 is palindrome";
    } else {
      let [counter, nextDate] = getNextPalindromeDate(date);
      let [ctr, previousDate] = getPreviousPalindromeDate(date);
      if (counter<ctr) {
      output.innerText = `OOOPS! your birthday is not Palindrome.😥 Next date is ${nextDate.day} / ${nextDate.month} /${nextDate.year} , it will come in next ${counter} days!✨`;
      }else{
        output.innerText=`OOOPS! your birthday is not Palindrome.😥Previous date was ${previousDate.day} / ${previousDate.month} /${previousDate.year} , is gon by ${ctr} days!✨`
      }
    }
  }
}

let inputDate = document.getElementById("input-date");
let form = document.querySelector("form");
let output = document.querySelector(".result");
form.addEventListener("submit", formHandeller);
