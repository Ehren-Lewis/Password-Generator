// Assignment Code


// First prompt to explain to the user of what is occuring
alert('Welcome to the password generator! Either fill out the form or answer through the prompts. If you input the wrong form information, you will have to start over!')
var generateBtnByForm = document.querySelector("#generatebyForm");

// Variable definition of all the cases
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const specialChar = "@#$&%!~";

const params = {lowerCase, upperCase, numeric, specialChar};


// Second function to keep the code cleaner 
const createPassword = (formDataResults, passParams) => {
  let passLength = 0;
  let returnPassword = '';
  let pickFromString = '';

  for (var criteria of formDataResults) {
    if (criteria[0] == 'length') {
      passLength = Number(criteria[1]);
      continue;
    }

    if (criteria[1] == "true") {
      pickFromString += passParams[criteria[0]];
    }
  }

  for (let i = 0; i < passLength; i++) {
    returnPassword += pickFromString[Math.floor(Math.random() * pickFromString.length)];
  }

  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = returnPassword;

}


// Write password to the #password input
function wrtiePasswordByForm() {
  var passwordText = document.querySelector("#password");

// Puts every form element into a variable
const form = document.querySelector("#passwordForm");

// Gathers all of the input elements from the for
const formElements = Array.from(form.querySelectorAll("input"));

const testForm = new FormData();


// Used to check if type is number or checkbox, as well as catches edge cases
formElements.forEach( ele => {
  if (ele.type ==="number" ) {
    if (ele.value.length < 1) {
      alert("Please enter a number");
      return;
    }

    if (ele.value > 128 || ele.value < 8) {
      alert("Password either too long or too short");
      return;
    }

    testForm.append(ele.id, ele.valueAsNumber);
  } 

  if (ele.type === "checkbox") {
    testForm.append(ele.id, ele.checked);
  }
})


  // Had to define 2 different test from entries.
  // There seems to be an issue with how entries works and undefined after
  // iterating through it once
  let new_arr = testForm.entries();
  let secondArr = testForm.entries();
  let checkChecker = false;

  for (let checks of secondArr) {
    if (checks[0] != "length" ) {
      if (checks[1] == "true") {
      checkChecker = true;
      }
    }
  }

  if (!checkChecker) {
    alert("Please select at least 1 checkbox");
    return;
  }
  
createPassword(new_arr, params);
}

// Add event listener to generate button
generateBtnByForm.addEventListener("click", wrtiePasswordByForm);


var generateBtn = document.querySelector("#generate");

// Function for using the prompt version button
const writeRegPass = () => {
  let returnPassword = '';
  let passwordOptions = '';
  var inputLength = prompt("Please input password length greater than 8 and less than 128");
  var passLength = parseInt(inputLength);
  if (isNaN(passLength)) {
    alert('Please input only numbers');
    return;
  } else if (passLength > 128 || passLength < 8) {
    alert("please pick a number between 8 and 128");
    return;
  }

  var lowerCaseOption = prompt("Would you like lowercase characters in your password? y/n");
  if (lowerCaseOption == 'y' || lowerCaseOption == 'Y') {
    passwordOptions += lowerCase;
  } else if (lowerCaseOption == 'n' || lowerCaseOption == 'N') {
    
  } else {
    alert('Please input either y or n');
    return;
  }

  var upperCaseOption = prompt("Would you like uppercase characters in your password? y/n");
  if (upperCaseOption == 'y' || upperCaseOption == 'Y') {
    passwordOptions += upperCase;
  } else if (upperCaseOption == 'n' || upperCaseOption == 'N') {
    
  } else {
    alert('Please input either y or n');
    passwordOptions = '';
    return;
  }

  var numberOption = prompt("Would you like numbers in your password? y/n");
  if (numberOption == 'y' || numberOption == 'Y') {
    passwordOptions += numeric;
  } else if (numberOption == 'n' || numberOption == 'N') {
    
  } else {
    alert('Please input either y or n');
    passwordOptions = '';
    return;
  }

  var specialCharOption = prompt("Would you like special characters in your password? y/n");
  if (specialCharOption == 'y' || specialCharOption == 'Y') {
    passwordOptions += specialChar;
  } else if (specialCharOption == 'n' || specialCharOption == 'N') {

  } else {
    alert('Please input either y or n');
    passwordOptions = '';
    return;
  }

  let paramsSet = [['Lowercase: ',lowerCaseOption], ['Uppercase', upperCaseOption], ["Numeric", numberOption], ["Special Characters", specialCharOption]];
  let presenter = [];
  
  // for (let i = 0; i < paramsSet.length; i++) {

  //   if (paramsSet[i] == 'y' || paramsSet[i] == 'Y') {
  //     presenter.push
  //   }
  // }

  for (let item of paramsSet) {
    if (item[1] == 'y' || item[1] == 'Y') {
      console.log(item)
      presenter.push(item);
    }
  }

  if (presenter.length == 0) {
    alert("Please select at least 1 checkbox");
    passwordOptions = '';
    return;
  }

  for (let i = 0; i < passLength; i++) {
    returnPassword += passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
  }

  var passwordText = document.querySelector("#password");
  passwordText.innerHTML = returnPassword;  

}


generateBtn.addEventListener("click", writeRegPass);