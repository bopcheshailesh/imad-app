console.log('Loaded!');

/*var element = document.getElementById('main-text');
element.innerHTML = 'New text';

var img = document.getElementById('madi');

var marginLeft = 0;

function moveright(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveright, 50);
};
*/
var button = document.getElementById('counter');

button.onclick = function(){
    var numberoftimesbuttonclicked = document.getElementById('count');
    numberoftimesbuttonclicked.innerHTML = numberoftimesbuttonclicked.innerHTML + 1;
}