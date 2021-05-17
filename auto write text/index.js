var text='YAV Technologies Mohammed Rahaber';
let index=0;
function writeText(){
document.getElementById('f').innerText=text.slice(0,index);
index++;
if(index>text.length){
    index=0;
}
}
setInterval(writeText,100)