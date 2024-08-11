// Assignment Code
var generateBtn = document.querySelector("#personal");

// Write click event to the #Onclick input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
