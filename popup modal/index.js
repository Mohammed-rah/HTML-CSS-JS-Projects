const ope=document.getElementById('open');
const clo=document.getElementById('close');
const contain=document.querySelector('.container');
ope.addEventListener('click',abc);
function abc(){
 contain.classList.add('active')
}
clo.addEventListener('click',xyz);
function xyz(){
    contain.classList.remove('active')
}