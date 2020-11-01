// Assignment Code
var generateBtn = document.querySelector("#generate");


let writePassword = function() {

  let  charTypes = {
    "upper case": {required: "", possibleVals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}, 
    "lower case":  {required: "", possibleVals: "abcdefghijklmnopqrstuvwxyz"}, 
    "numeric":  {required: "", possibleVals: "0123456789"}, 
    "special":  {required: "", possibleVals: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="}
  };
  
  console.log(charTypes);
  console.log("<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=");

window.alert("Password generator: You will be prompted answer yes or no ('Y' or 'N'), as whether the password generated requires each of the specified character types, as well as password length.");

  for(let i = 0; i < charTypes.length; i++) {
    let response = "";
    while(response != (toUpperCase("Y")) && response != (toUpperCase("N"))) {
      response = prompt("Should  the password require at least one " + charTypes[i]  + " character? (Enter Y or N) "); 
   }
   console.log(charTypes[i]);
charTypes[i].value = response; 
}


console.log(charTypes);



 /* ---  Declare string char type CHECKING  functions ---------------------------- */
// CHECK IF STRING >> Has at least one UPPER; 
function hasUpperCase(str) {
  if(str.toLowerCase() != str) {
      return true;
  }
  return false;
}

// CHECK IF STRING >> Has at least one LOWER; 
 function hasLowerCase(str) {
  if(str.toUpperCase() != str) {
      return true;
  }
  return false;
}
 // CHECK IF STRING >> Has at least one NUMBER/DIGIT; 
function hasNumber(str) {
    let strArr = str.split("");
    for(let i = 0; i < strArr.length; i++){
    if(strArr[i].valueOf() * 0 == 0) {
    return true;
    //contains number
    }
  }
  return false;
}

function hasNumber(str) {
  let strArr = str.split("");
  for(let i = 0; i < strArr.length; i++){
  if(strArr[i].valueOf() * 0 == 0) {
  return true;
  //contains number
  }
}
return false;
}

 // CHECK IF STRING >> Has at least one SPECIAL-CHAR; 
let hasSpecialChar = function(str){
  let specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=".split("");
  let strArr = str.split("");
   for(let i = 0; i < strArr.length;i++){
     for(j = 0; j < specialChars.length; j++) {
     if(strArr[i] == specialChars[j]) {
         return true; 
      } 
     } // end j loop;
   }  // end i loop;
   return false;
  }

  

let possibleVals = {
lowercase: 'abcdefghijklmnopqrstuvwxyz',
uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
number: '0123456789',
symbol: '*;<>()[]{}#$?!^|'
};



function generatePassword(charTypeObj){

let possibleVals= "";

for(let p = 0; p < charTypeObj.length; p++) {


}



let outputPassword = "";

  for(let i=0; i < charTypeObj.length; i++){
   outputPassword = outputPassword + (Math.floor(Math.random() * main.length)];

  
  document.querySelector('input[type="text"]').value = finalPassword;
  
}else{
  document.querySelector('input[type="text"]').value = "Select any password option and specify the length";
}

  
}


  console.log("TESTS (should be: T, F, T, F, T, F, T, F -- In that order) ");
  console.log("hasUpper hasUpper:                                                  " + hasUpperCase("doesHaveAnUpper"));
  console.log("Doesnt-Have-hasUpper hasUpper(s/b false):                           " + hasUpperCase("doesnt have an upper"));
  console.log("hasLower hasLower:                                                  " + hasLowerCase("doesHaveALower"));
  console.log("Doesnt-Have-Lower hasLower(s/b false):                              " + hasLowerCase("ABC"));
  console.log("String-That-Does-have-humber hasNumber:                             " + hasNumber("ABC1"));
  console.log("Doesnt-Have-number hasNumber(s/b false):                            " + hasNumber("ABC"));
  console.log("String-That-HAS-have-Special hasSpecialChar:                        " + hasSpecialChar("ABC1%"));
  console.log("String-That-DOESNT-have-Special hasSpecialCharr(s/b false):         " + hasSpecialChar("ABC"));

}





/* end validation funcitons ----------------------------------------------------*/
/* [   ] GENERATE PASSWORD  ----------------------------------------------------*/
     
       

/* give user the generated password----------------------------------------------------*/
// Write password to the #password input
function writePassword() {
  var password = generatePassword();


  //[DONE] Writes to page
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
 
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

