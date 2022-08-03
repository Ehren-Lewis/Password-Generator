// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const specialChar = "@#$&%!~";

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Puts every form element into a variable
const form = document.querySelector("#passwordForm");

// Gathers all of the input elements from the for
const formElements = Array.from(form.querySelectorAll("input"));


console.log(formElements);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
