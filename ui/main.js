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
counter = 0;
button.onclick = function(){
   //Make a request to the counter end-point
   
   //Capture the response and store it in a variable
   
   //Render the variable in correct span
   counter = counter + 1 ;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
}