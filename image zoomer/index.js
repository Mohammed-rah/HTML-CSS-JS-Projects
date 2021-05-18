const container=document.getElementById("container");
const img=document.querySelector("img");
container.addEventListener('mousemove',abc);
function abc(e){
const x=e.clientX
- e.target.offsetLeft;
const y=e.clientY
- e.target.offsetTop;
console.clear();
console.log(x,y)
img.style.transformOrigin=
`${x}px ${y}px`;
img.style.transform=`scale(2)`;
}
container.addEventListener('mouseleave',xyz);
function xyz(){
    img.style.transformOrigin="center center";
    img.style.transform='scale(1)';
}
