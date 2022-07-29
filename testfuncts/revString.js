function reverseString(string) {
    let str = '';
    for (let i = string.length; i >= 0; i -= 1) {
      str += string.charAt(i);
    }
    return str;
  }
  module.exports = reverseString