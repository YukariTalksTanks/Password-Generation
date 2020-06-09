// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    // promts user to choose pass length and parses into an integer
    var passLength = prompt("Password length (min:8 chars, max:128 chars): ");
    var length = parseInt(passLength);

    var passChars = prompt("What type of characters would you like to use: \nlowercase, uppercase, numeric, special characters or all");
    var charset;
    var charset1 = "abcdefghijklmnopqrstuvwxyz";
    var charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charset3 = "0123456789";
    var charset4 = "!@#$%&*";
    var charset5 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*"

    if (length >= 8 && length <= 128) {
      length;
      // straight up just the character set to choose from
      // The retVal kinda sets it up as both a split and gets returned as a string for the password
      if (passChars === "lowercase") {
        charset = charset1;
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          //parses and prints like an array after choosing random whole numbers associated with the charlist
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
      else if (passChars === "uppercase") {
        charset = charset2;
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          //parses and prints like an array after choosing random whole numbers associated with the charlist
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
      else if (passChars === "numeric") {
        charset = charset3;
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          //parses and prints like an array after choosing random whole numbers associated with the charlist
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
      else if (passChars === "special characters" || passChars === "special") {
        charset = charset4;
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          //parses and prints like an array after choosing random whole numbers associated with the charlist
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
      else if (passChars === "all") {
        charset = charset5;
        retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
          //parses and prints like an array after choosing random whole numbers associated with the charlist
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
      else {
        alert("Please enter valid response")
      }
    }

    //  I honestly couldnt figure out how to do this part of connecting two inputs and thier character sets, lemme know if I was on the right track here
    // Didnt want to code every variation and couldnt figureout how to do more than one variable

    // else if (passChars === "lowercase uppercase") {
    //   charset = charset1 + charset2;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }
    // else if (passChars === "lowercase numeric") {
    //   charset = charset1 + charset3;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }
    // else if (passChars === "lowercase special characters" || passChars === "lowercase special") {
    //   charset = charset1 + charset3;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }
    // else if (passChars === "uppercase numeric") {
    //   charset = charset1 + charset3;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }
    // else if (passChars === "uppercase special characters" || passChars === "uppercase special") {
    //   charset = charset1 + charset3;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }
    // else if (passChars === "lowercase numeric") {
    //   charset = charset1 + charset3;
    //   retVal = "";
    //   for (var i = 0, n = charset.length; i < length; ++i) {
    //     //parses and prints like an array after choosing random whole numbers associated with the charlist
    //     retVal += charset.charAt(Math.floor(Math.random() * n));
    //   }
    //   return retVal;
    // }

    // else {
    //   alert("Please input a vaild length.")
    // }
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
