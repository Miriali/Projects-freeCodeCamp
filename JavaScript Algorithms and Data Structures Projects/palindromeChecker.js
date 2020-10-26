  function palindrome(str) {
    str = str.replace(/[_\W]/g, '');
    str = str.toLowerCase();
    var reverseStr = str.split('').reverse('').join('');
    //return reverseStr;//
    if (str == reverseStr) {
       return true;
    }
    else {
      return false;
    }
  }

  palindrome("_eye");