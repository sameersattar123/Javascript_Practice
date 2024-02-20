// program to check if the string is palindrome or not

function checkPalindrome(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  if (str == newStr) {
    console.log("It is a Palindrome");
  } else {
    console.log("It is not a Palindrome");
  }
}

const result  = checkPalindrome("madam")
console.log(result)