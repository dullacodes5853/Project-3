var generateBtn = document.querySelector("#generate");

function randomInt(min,max) {
if (!max) {
  max = min  
  min=0
}
var rand = Math.random()
return Math.floor(min*(1-rand) + rand*max)

}
function getRandomItem(list) {
  return list[randomInt(0, list.length-1)]
}


function generatePassword() { 
var userinput = window.prompt("How long do you want your password to be")

var passwordLength = parseInt(userinput)

if (isNaN(passwordLength)) { 
window.alert("Thats not a number")
return
}


if (passwordLength < 8 || passwordLength > 128) {
window.alert("Password length must be between 8 and 128 characters")
return
}

var userWantsNumber = window.confirm("Would you like to include numbers in your password?")
var userWantsSymbols = window.confirm("Would you like symbols in you password")
var userWantsLowercase = window.confirm("Would you like lowercase letters in your password")
var userWantsUppercase = window.confirm("Would you like uppercase letters in your password")


var numbersList = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"]
var symbolList = ["!","@","#","$","%","^","&","*",]
var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseList =[]


var optionsCart = []

for (var i=0; i < lowercaseList.length; i++) {
  uppercaseList [i] = lowercaseList[i].toUpperCase()
}


if (userWantsNumber === true) {
  optionsCart.push(numbersList)
}
  
if (userWantsSymbols === true) {
  optionsCart.push(symbolList)
}

if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList)

}
if (userWantsUppercase === true) {
  optionsCart.push(uppercaseList)
}

if (optionsCart.length === 0) {
  optionsCart.push(uppercaseList)
}

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
  }

 return generatedPassword
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// 
generateBtn.addEventListener("click", writePassword);
