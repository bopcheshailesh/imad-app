console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = 'New text';

var img = document.getElementById('madi');

var marginLeft = 0;

function moveright(){
    marginLeft = marginLeft + 1 ;
    img.style.margin-left = marginleft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveright, 50);
};