var toggle=document.getElementById("toggle");
toggle.addEventListener('change',abc);
function abc(a){
    document.body.classList.toggle('dark',a.target.checked)
}