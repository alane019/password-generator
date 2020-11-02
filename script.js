
  
  
  
  let generatePassword = function() {

    let  charTypes = {
      upper_case: {
        textVersion: "upper case",
      	required: "",
        possibleVals: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }, 
      lower_case:  {
      	textVersion: "lower case",
        required: "",
        possibleVals: "abcdefghijklmnopqrstuvwxyz"
      }, 
      numeric:   {
      	textVersion: "numeric",
        required: "",
        possibleVals: "0123456789"
      }, 
     special:  {
     		textVersion: "special",
        required: "",
        possibleVals: "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="
      }
    };
    
    /*  // ----[ object test ] --------------------------------------------- ; 
    Object.keys(charTypes).forEach(key => {
      console.log(key, charTypes);
    // ------------------------------------------------------------------  */

  window.alert("Password generator: You will be prompted answer yes or no ('Y' or 'N'), as whether the password generated requires each of the specified character types, as well as password length.");
    
   let yesCount = 0;
   for (const key in charTypes) {
           // Accessing nested key/value object properties
           console.log(`${key}: ${charTypes[key].textVersion}`);
     let validResponses = ["Y", "N"]; 
   
     function checkResponseValidity() {
        function askNow() {
           let eitherCaseResponse =  prompt(`Should the password require at least one ${charTypes[key].textVersion} character?  (Enter Y or N)`);
           let upperCaseResponse = eitherCaseResponse.toUpperCase();
           console.log("upper-case-response: " + upperCaseResponse);
           return upperCaseResponse;
        } //end askNow()      
        let response = askNow(); 
        console.log("response: " + response);
        if(!(validResponses.includes(response))){
              console.log("Invalid response to Y/N question.");    
              window.alert("RESPONSE WAS INVALID: \n  \n You must respond with only Y or N. Please try again.");   
              askNow();
        } 
        if(response.toUpperCase() == "Y") {
            yesCount++;
        }
      }  //end checkResponseValidity
      checkResponseValidity();
    }  

    if(!(yesCount >= 1)) { window.alert("You must answer Y to at least one of the character type requrements.") ; checkResponseValidity();}
    
    // end for-const key in obj-charTypes. -----------------------------------------------------
      // */

   function startPwValidationProcess(){
    let  requestedPwLength = 0;
   function pwLengthPrompt() {
      let pwLengthResponse =  0;
      function getUserPwLenResponse(){
        //let value =  -1;
        let inputString = prompt("Choose a desired password length between 8 and 128 characters"); 
        
        if(!((inputString => 8) && (inputString <= 128))) {
          console.log( inputString + " << was an invalid value (not in range)")
          window.alert("RESPONSE WAS INVALID: \n  \n  Password length between 8 and 128 characters.")
          return -1;// pwLengthPrompt();
          }
          else{
            console.log(inputString + "  << VALID / OK");
            return inputString;
          }
      }
    pwLengthResponse =  getUserPwLenResponse();
      console.log("pwLengthResponse: " + (pwLengthResponse));
    console.log("pwLengthResponse + 1000 = ...");
    pwLengthResponse = parseInt(pwLengthResponse);
    console.log(1000 + pwLengthResponse);
   } //end pwLengthPrompt function
    requestedPwLength =  pwLengthPrompt();
    if((requestedPwLength == -1) || !((requestedPwLength => 8) && (requestedPwLength <= 128))){
      requestedPwLength = 0; 
      pwLengthPrompt(); 
    } else {
      requestedPwLength = parseInt(requestedPwLength); 
      randomizedStringGenerator(charTypes, requestedPwLength); 
    }
   
   


  }
  startPwValidationProcess();


    /* -------------------------------------------------------------------------------*/
   /* -------------------------------------------------------------------------------*/
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
      /////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////
  //function generatePossibleValueSet() {

     function randomizedStringGenerator(jsObject, strLengthSpec) {

      let combinedStr1;
      function getCombinedStr (obj) { 
        let currentString = ""; 
          for(const key in obj) {
            console.log(`${key}: ${obj[key].possibleVals}`);
            currentString = currentString + obj[key].possibleVals;
          } // end forIn 
        return currentString; 
      } //end getCombinedStr

     combinedStr1 = getCombinedStr(jsObject);
    console.log(combinedStr1);
    let iterations = 0;
    if(requestedPwLength) { 
        if(requestedPwLength > 7){
          iterations = requestedPwLength;
        }
    } else { interations = 10;
     }
    
    let allPossibleVals =  getCombinedStr();
    console.log("AllPossibleVals: " + allPossibleVals); 
    let possibleValsArr = Array.from(allPossibleVals);
    console.log(possibleValsArr);
    let outputPassword = "";
    for(let i = 0; i < iterations; i++){
        //for the length of the password, randomly select an char in allpossiblevalStr 
      console.log("Random string checks:  ");
      console.log("charTypeObj.length: " +  charTypeObj.length );   
        outputPassword = outputPassword + possibleValsArr[(Math.floor(Math.random() * possibleValsArr.length))];
    }
    if(!((outputPassword.length >= 8) && (outputPassword.length <= 128))) {outputPassword = "&F<dga%Ji2a"};
   // return outputPassword;

            var password = generatePassword();
            //[DONE] Writes to page
        var passwordText = document.querySelector("#password");
        passwordText.value = password;

       
        }

        // Assignment Code
        var generateBtn = document.querySelector("#generate");
        // Add event listener to generate button
        generateBtn.addEventListener("click", writePassword);
        // remove this line after testing; 
        //generateBtn.click();
  }


    /* console.log("TESTS (should be: T, F, T, F, T, F, T, F -- In that order) ");
    console.log("hasUpper hasUpper:                                                  " + hasUpperCase("doesHaveAnUpper"));
    console.log("Doesnt-Have-hasUpper hasUpper(s/b false):                           " + hasUpperCase("does not have an upper"));
    console.log("hasLower hasLower:                                                  " + hasLowerCase("doesHaveALower"));
    console.log("Doesnt-Have-Lower hasLower(s/b false):                              " + hasLowerCase("ABC"));
    console.log("String-That-Does-have-humber hasNumber:                             " + hasNumber("ABC1"));
    console.log("Doesnt-Have-number hasNumber(s/b false):                            " + hasNumber("ABC"));
    console.log("String-That-does-not-have-Special hasSpecialChar:                   " + hasSpecialChar("ABC1%"));
    console.log("String-that-does-have-special-char hasSpecialCharr(s/b false):      " + hasSpecialChar("ABC"));
   */
   

function generate()
        