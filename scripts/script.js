/* Scripts for slideshow-buynowpage */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4600); // The slide move images every 4.6 seconds
}



/* Scripts for menue-button-buynowpage  */

function openMenue() {
  document.getElementById("buynowpage-sidemenue").style.width = "290px";
}

function closeMenue() {
  document.getElementById("buynowpage-sidemenue").style.width = "0";
  document.getElementById("openfavourites").style.width = "0";
  document.getElementById("openfavourites").style.height = "0";
  document.getElementById("favouritesmenue-topic").style.visibility = "hidden";
  document.getElementById("printfavourites").style.visibility = "hidden";
}

function favouritesmenu() {
  document.getElementById("printfavourites").innerHTML = localStorage.getItem("favbill");
  document.getElementById("openfavourites").style.width = "36%";
  document.getElementById("openfavourites").style.height = "49%";
  document.getElementById("favouritesmenue-topic").style.visibility = "visible";
  document.getElementById("printfavourites").style.visibility = "visible";
}


/* Scripts for add to order btn-buynowpage */
var addbilltofav;
function addtoorderbtnbuynowpage() {

document.getElementById("currentbill-buynowpage").style.padding = "30px"; 
document.getElementById("currentbill-buynowpage").style.borderBottom = "solid black 1px"; 
document.getElementById("currentbill-topic").style.padding = "30px"; 
document.getElementById("currentbill-topic").style.borderTop = "solid black 1px"; 
document.getElementById("currentordertopic").style.fontSize = "23px";
document.getElementById("fav-btn").style.padding = "10px 10px" ;   
document.getElementById("fav-btn").style.width = "15%";


var manufacturers = document.getElementsByName("manufacturer");

for (let a=0; a <  manufacturers.length; a++){
     if(manufacturers[a].checked) {

var Displaymanufacture = manufacturers[a].value;
  }
}
  
 
var products = document.getElementsByName("products");
var Displayproducts = "No product selected" ;


for (let b=0; b <  products.length; b++){
    if(products[b].checked) {
 
Displayproducts = products[b].value;
  }

var mainproductvalue = [1000, 2000, 2500,  800]; 
   for (let e=0; e < products.length; e++ ){
   if(products[e].checked) {
  
  var mainproductprice = mainproductvalue[e]; 
  }
}
}


var size = document.getElementsByName("size");

for (let c=0; c < size.length; c++){
     if(size[c].checked) {

var Displaysize = size[c].value;
  }

var sizevalue = [0, 2500, 5000]; 
  for (let f=0; f < size.length; f++ ){
  if(size[f].checked) {
 
 var productsizevalue = sizevalue[f]; 
 }
}

 }

 var otherproducts = document.getElementsByName("other-products");
 var otherproductvalue = 0;
 var Displayotherproducts = "No Product Selected"

  for (let d=0; d <otherproducts.length; d++){
    if(otherproducts[d].checked) {

 Displayotherproducts = otherproducts[d].value;
    }
  var othproductvalue = [500, 1000, 1500, 400]; 
  for (let g=0; g < otherproducts.length; g++ ){
  if(otherproducts[g].checked) {
     
 otherproductvalue = othproductvalue[g];
   }
 }
}

var totalordervalue = mainproductprice + productsizevalue + otherproductvalue;

  document.getElementById("currentbill-buynowpage").innerHTML = 
  "Manufacturer : " + Displaymanufacture + "<br>" + "<br>" + "Products : " + Displayproducts + "<br>" + "<br>" + "Size : " + Displaysize + "<br>" + "<br>" + "Other products : " + Displayotherproducts + "<br>" + "<br>" +  "Final Price : LKR." + totalordervalue ;                                                          
   addbilltofav = document.getElementById("currentbill-buynowpage").innerHTML ;
}
 
function placeorderbtn() {
  if(confirm("Are you sure, You want to place this order")){
      location.reload();
  }
  alert("Your order was sent. Thank you for shopping with us !");
}

function addtofav(){
  document.getElementById("fav-btn").style.backgroundColor ="red" ;
  localStorage.setItem("favbill", addbilltofav);
}

function takefromfav() {
document.getElementById("takefav-btn").style.backgroundColor ="red";
var taketobill = localStorage.getItem("favbill");
document.getElementById("currentbill-buynowpage").innerHTML = taketobill;
}

/* Scripts for add to favourites btn-buynowpage */
function submitbtncontactus(){
  document.getElementById("submitbtn-contactus").style.backgroundColor ="red" ;
}

