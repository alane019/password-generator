
  
  
  
  let generatePassword = function() {

    let  charTypes = {
      "upper case": {required: "", possibleVals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}, 
      "lower case":  {required: "", possibleVals: "abcdefghijklmnopqrstuvwxyz"}, 
      "numeric":   {required: "", possibleVals: "0123456789"}, 
      "special":  {required: "", possibleVals: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="}
    };
  
  window.alert("Password generator: You will be prompted answer yes or no ('Y' or 'N'), as whether the password generated requires each of the specified character types, as well as password length.");


  let pwLengthResponse; 

    for(let i = 0; i < charTypes.length; i++) {
          let response = "";
          while(response != (toUpperCase("Y")) && response != (toUpperCase("N"))) {
            response = prompt("Should  the password require at least one " + charTypes[i]  + " character? (Enter Y or N)"); 
        }
        charTypes[i].value = response; 
      
        console.log(charTypes[i]);
    }

      pwLengthResponse =  -11;
    while(!(pwLengthResponse => 1  && pwLengthResponse <= 128)) {
      pwLengthResponse = prompt("Choose a desired password length between 8 and 128 characters"); 
    }

  
/* ---------------------------------- */

/* ----------------------------------*
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

    /* for reference  
    let  charTypes = {
      "upper case": {required: "", possibleVals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}, 
      "lower case":  {required: "", possibleVals: "abcdefghijklmnopqrstuvwxyz"}, 
      "numeric":  {required: "", possibleVals: "0123456789"}, 
      "special":  {required: "", possibleVals: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="}
    };  */
    
        console.log(charTypes)
    let allPossibleVals =  Array.from(charTypes).forEach(element => {
      
    });(function(){
      let tempString = ""; 
        if(toUpperCase(charType.required) == "T"){ 
             console.log("  toUpperCase(charType.required) == \"T\"  is true for >> " + charType );
            allPossibleVals = allPossibleVals + charType.possibleVals;
         }
    });

  let outputPassword = "";
    for(let i=0; i < pwLengthResponse.length; i++){
      //for the length of the password, randomly select an char in allpossiblevalStr 
      outputPassword = outputPassword + allPossibleVals[(Math.floor(Math.random() * charTypeObj.length))];
    }

    return outputPassword;
      
    console.log("TESTS (should be: T, F, T, F, T, F, T, F -- In that order) ");
    console.log("hasUpper hasUpper:                                                  " + hasUpperCase("doesHaveAnUpper"));
    console.log("Doesnt-Have-hasUpper hasUpper(s/b false):                           " + hasUpperCase("doesnt have an upper"));
    console.log("hasLower hasLower:                                                  " + hasLowerCase("doesHaveALower"));
    console.log("Doesnt-Have-Lower hasLower(s/b false):                              " + hasLowerCase("ABC"));
    console.log("String-That-Does-have-humber hasNumber:                             " + hasNumber("ABC1"));
    console.log("Doesnt-Have-number hasNumber(s/b false):                            " + hasNumber("ABC"));
    console.log("String-That-does-not-have-Special hasSpecialChar:                   " + hasSpecialChar("ABC1%"));
    console.log("String-that-does-have-special-char hasSpecialCharr(s/b false):      " + hasSpecialChar("ABC"));

} 
  /* give user the generated password----------------------------------------------------*/
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
            //[DONE] Writes to page
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

  // Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
