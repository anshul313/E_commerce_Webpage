var quantity =0;
var quantitydiv = document.getElementById('quantity');
var incrementbutton = document.getElementById('increment');
var decrementbutton = document.getElementById('decrement');
var activeImage = document.getElementById("activeimage");
var firstImage = document.getElementById("first");
var secondImage = document.getElementById("second");
var thirdImage = document.getElementById("third");
var fourthImage = document.getElementById("fourth");

function incrementquantity(){
    quantity++;
    quantitydiv.innerText=quantity;
}
function decrementquantity(){
    quantity--;
    if(quantity<=0){
        quantity=0;
    }
    quantitydiv.innerText=quantity;
}

function changeFirstImageUrl(){
    secondImage.style.border="none";
    secondImage.style.opacity="1";
    thirdImage.style.border="none";
    thirdImage.style.opacity="1";
    fourthImage.style.border="none";
    fourthImage.style.opacity="1";
    firstImage.style.border="5px solid orange";
    firstImage.style.opacity="0.5";
   activeImage.src="../images/shoe/1.avif";
}
function changeSecondImageUrl(){
    firstImage.style.border="none";
    firstImage.style.opacity="1";
    thirdImage.style.border="none";
    thirdImage.style.opacity="1";
    fourthImage.style.border="none";
    fourthImage.style.opacity="1";
    secondImage.style.border="5px solid orange";
    secondImage.style.opacity="0.5";
    activeImage.src="../images/shoe/2.avif";
 }
 function changeThirdImageUrl(){
    firstImage.style.border="none";
    firstImage.style.opacity="1";
    secondImage.style.border="none";
    secondImage.style.opacity="1";
    fourthImage.style.border="none";
    fourthImage.style.opacity="1";
    thirdImage.style.border="5px solid orange";
    thirdImage.style.opacity="0.5";
    activeImage.src="../images/shoe/3.avif";
 }
 function changeFourthImageUrl(){
    firstImage.style.border="none";
    firstImage.style.opacity="1";
    secondImage.style.border="none";
    secondImage.style.opacity="1";
    thirdImage.style.border="none";
    thirdImage.style.opacity="1";
    fourthImage.style.border="5px solid orange";
    fourthImage.style.opacity="0.5";
     activeImage.src="../images/shoe/4.avif";
  }

incrementbutton.addEventListener('click',incrementquantity);
decrementbutton.addEventListener('click',decrementquantity);
firstImage.addEventListener('click',changeFirstImageUrl);
secondImage.addEventListener('click',changeSecondImageUrl);
thirdImage.addEventListener('click',changeThirdImageUrl);
fourthImage.addEventListener('click',changeFourthImageUrl);