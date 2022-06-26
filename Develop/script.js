// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //lowercase, uppercase, numeric, and/or special characters
  var size = prompt("How long should your password be");
  if(size>128||size<8){
 alert("Password must be between 8 and 128 characters");
return;
  }
  
 
  var password = generatePassword(size);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}


function generatePassword(size){
  var special=')(*&^%$#@!';
var speciallet = special.split("");
  var lowercase =confirm("Would you like your password to contain lowercase letters?");
  var numeric = confirm("Would you like your password to contain numbers?");
var uppercase = confirm("Would you like your password to contain uppercase letters?");
  var special = confirm("Would you like your password to contain special characters?");

var passbank='';
var lower ='asdfghjklqwertyuiopzxcvbnm';
var lowerletters =lower.split("");
var upper ='QWERTYUIOPASDFGHJKLZXCVBNM';
var upperletters =upper.split("");
var num='1234567890';
var singlenum = num.split("");

for(var i=0; i<size; i++){
if(lowercase==true){
passbank+=lowerletters[Math.floor(Math.random()*size)]
}
if(numeric==true){
  passbank+=singlenum[Math.floor(Math.random()*size)]
}
if(uppercase==true){

  passbank+=upperletters[Math.floor(Math.random()*size)]
}
if(special==true){

  passbank+=speciallet[Math.floor(Math.random()*size)]
}

}
return passbank;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
