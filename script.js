
 let generateBtn = document.querySelector("#generate");  // Add event listener to generate button

 let outputPassword = ""; 
 const typesKeys = ["upper case", "lower case", "numeric", "special"]
 const typesValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="]
 let charTypeResponse;


 let generatePassword = function()  {
  
   let buildString = function(str, keyArray, valueArray, yesNo) {

      var passwordDiv = document.querySelector("#password");
      passwordDiv.value = outputPassword;

      let pwLength = prompt("Enter password length (must be between 8 and 128 characters)");
      //invalid password length chosen (below min)
      if(pwLength < 8){
         window.alert("8 characters is the minimum password length. Password length will be 8 characters");
         pwLength = 8;
      }
       //invalid password length chosen (over min)
      else if(pwLength > 128){
         window.alert("128 characters is the maximum password length. Password length will be 128 characters");
         pwLength = 128;
      }
      let yesCount = 0  
      for(let i = 0; i < 4; i++){
         yesNo = confirm(`Password should include ${keyArray[i]} characters?`);
         console.log(yesNo);
         if(yesNo == true){
            str = str + valueArray[i];
            yesCount++;
         }
         else if((i == 3) && (yesCount == 0)){
         //user did not confirm any character types.
          //window.alert("You must select at least one character type.");
         //window.location.reload()
         //Instead of the two commented out lines above, character types will be included
         // Reasoning: Saves user's time and effort if this was unintentional; Clicking Generate Password button allows user to adjust as needed.
          str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-="; 
         }
      }
       console.log("str after for loop", str)
         let outputText = "";
         
         for(let i = 0; i < pwLength; i++){
            outputText = outputText + str[(Math.floor(Math.random() * str.length))];
         }
         passwordDiv.value = outputText;
      
   }  // end buildString fn >>  
   buildString(outputPassword, typesKeys, typesValues, charTypeResponse);
 }
generateBtn.addEventListener("click", generatePassword);
 
