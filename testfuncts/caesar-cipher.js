function caesarCipher(string, shift) {
    let encryptedMsg = '';
    for (let i = 0; i < string.length; i += 1){
      const letter = string.charCodeAt(i);
      if (letter > 96 && letter < 123) {
        if (letter + shift > 122 || letter + shift < 97) {
          encryptedMsg += String.fromCharCode((letter + shift) - 123 + 96)
        } else {
          encryptedMsg += String.fromCharCode(letter + shift)
        }
      }
      else if (letter > 64 && letter < 91) {
        if (letter + shift > 90 || letter + shift < 65) {
          encryptedMsg += String.fromCharCode((letter + shift) - 91 + 64)
        } else {
          encryptedMsg += String.fromCharCode(letter + shift)
        }
      }
      else {
        encryptedMsg += String.fromCharCode(letter)
      }
    }
    return encryptedMsg;
  }
  module.exports = caesarCipher;