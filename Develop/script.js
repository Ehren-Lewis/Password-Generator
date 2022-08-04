// Assignment Code
var generateBtnByForm = document.querySelector("#generatebyForm");


const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const specialChar = "@#$&%!~";

const params = {lowerCase, upperCase, numeric, specialChar};

const createPassword = (formParams, passParams) => {
  var passLength = 0;
  var returnPassword = '';
  var pickFromString = '';

  for (var criteria of formParams) {
    if (criteria[0] == 'length') {
      passLength = Number(criteria[1]);
      continue;
    }

    if (criteria[1] == "true") {
      pickFromString += params[criteria[0]];
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

    if (ele.valueAsNumber > 128 || ele.valueAsNumber < 8) {
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


const writeRegPass = () => {
  var inputLength = prompt("Please input password length greater than 8 and less thatn 128");
  if
}


generateBtn.addEventListener("click", writeRegPass);