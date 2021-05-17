var btn=document.getElementById("btn");
var container=document.getElementById("container");
btn.addEventListener("click",abc);
const notif=document.createElement('div');
   notif.classList.add('added');
   notif.innerHTML="hey you are amazing";
function abc(){
 
 container.appendChild(notif);
 setTimeout(()=>{
     notif.remove();
 },3000)

}
