
  function validate(){
  // set validate to true - flag
   var valid =true;
   var msge ="Incomplete form, ";
   // use if statements to check the data and set the message
   if(document.getElementById("n").value == ""){
     msge +=  "You need to fill in name. ";
     valid = false;
   }
   if(document.getElementById("a").value == ""){
     msge+= "You need to fill in the age.";
     valid =false;
   }
   if(!valid){ //!valid means not true. same  as valid == false
     document.getElementById("msge1").innerHTML=msge1;
   }
   return valid;
}
document.getElementsByTagName("h1")[0].style.color = "yellow";
document.getElementsByTagName("h1")[0].style.fontSize = "large";
document.getElementsByTagName("h1")[0].style.backgroundColor "blue";
