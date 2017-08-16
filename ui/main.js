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
var x = 0;
button.onclick = function(){
    var numberoftimesbuttonclicked = document.getElementById('count');
    if(x === 0){
        numberoftimesbuttonclicked.innerHTML = x;
        x++;
    }
    else{
        numberoftimesbuttonclicked.innerHTML = x;
    }
}