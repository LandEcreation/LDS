
function Bmicaculator(){

  var height = document.getElementById("myTex").value;
  var weight = document.getElementById("myText").value;


 var BMI = (weight / (height * height));


 var BMI = weight/ (height * height) ;
 alert(" Your BMI is "+ "  "+  BMI);


if (BMI  < 18.5){
alert("You are underweight.");
}
else if( BMI > 18.5 && BMI < 24.5 ){
alert("You have perfect weight.")
}
else{
alert("You are overweight.")
}
}


function dropbtn(){
document.querySelectorAll("img").innerHTML = getElementById("login");
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
