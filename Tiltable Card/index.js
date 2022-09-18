let el = document.getElementById('tilt');
const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener('mousemove',handleMove);
function handleMove(e){
    const xVal = e.layerX;
    const yVal = e.layerY;
    const xRotation = 20 * ((xVal-width/2)/width)
    const yRotation = -20 * ((yVal-height/2)/height)
    const string ='perspective(500px) scale(1.1) rotateX('+xRotation+'deg) rotateY('+yRotation+'deg)';
    el.style.transform = string
}

el.addEventListener('mouseup',function(){
    el.style.transform = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
})

el.addEventListener('mousedown',function(){
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0deg) rotateY(0deg)'
})

el.addEventListener('mouseup',function(){
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0deg) rotateY(0deg)'
})