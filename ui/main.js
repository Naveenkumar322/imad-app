console.log('Loaded!');
//change the text of the main-text.div
var element= document.getElementbyId ('main-text'
);

element.innerHTML='New Value';
//Move the Image
var img=document.getelementbyid('madi');
var marginleft=0;
function moveRight (){
    marginleft-marginleft + 10;
    img.style.marginleft=marginleft +'px';
}
img.onclick=function() {
    var interval=setinterval(moveright,50);
};