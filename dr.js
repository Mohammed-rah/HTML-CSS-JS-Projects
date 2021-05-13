var btn=document.getElementById("btn");
var nav=document.getElementById("nav");


btn.addEventListener('click',abc);
function abc(){
nav.classList.toggle("active");
btn.classList.toggle("active");


}
