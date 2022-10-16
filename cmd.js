var buttonsPlus= document.getElementsByClassName("add");
for (let i=0; i<buttonsPlus.length; i++) {
  buttonsPlus[i].addEventListener("click",function(){
  (buttonsPlus[i].nextElementSibling.innerHTML++);
    somme()
  })}

 var buttonsminus= document.getElementsByClassName("minus");
for (let i=0; i<buttonsminus.length; i++) {
  buttonsminus[i].addEventListener("click",function(){
  if (buttonsminus[i].previousElementSibling.innerHTML>0) {
    (buttonsminus[i].previousElementSibling.innerHTML--);
     somme()
  } 
  })} 


var buttonsTrash= Array.from(document.getElementsByClassName("fa-trash-alt"));
for (let i=0; i<buttonsTrash.length; i++) {
  buttonsTrash[i].addEventListener("click",function(){
  buttonsTrash[i].parentNode.remove();
     somme()
  })}

var heart=document.getElementsByClassName("fa-heart");
for (let i=0; i<heart.length; i++) {
 heart[i].addEventListener ("click",function(){
  if (heart[i].style.color=="grey") {
    heart[i].style.color="red"
  }   else {heart[i].style.color="grey"}
 })}

function somme() {
var total=0;
var quantity=document.getElementsByClassName("qte");
var price=document.getElementsByClassName("price");
for (let i=0; i<quantity.length; i++) {
  total += (quantity[i].innerHTML * price[i].innerHTML)
}
return document.getElementById("totalp").innerHTML="Shopping Bag total : " + total +"$"
}