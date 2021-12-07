const bg = document.getElementById('container');
const count = 20;

for(let i = 0; i < count; i++){
    let glitchBox = document.createElement('div');
        glitchBox.className ='box';
        bg.appendChild(glitchBox);
}

setInterval(function(){
const glitch = document.getElementsByClassName('box');
for(let i = 0; i < glitch.length; i++){
    glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
    glitch[i].style.top = Math.floor(Math.random()*500) + 'vh';
    glitch[i].style.width = Math.floor(Math.random()*200) + 'px';
    glitch[i].style.height = Math.floor(Math.random()*100) + 'px';
    glitch[i].style.backgroundPosition = Math.floor(Math.random()*500) + 'px';
}
}, 200)