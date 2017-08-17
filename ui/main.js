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
   //Create a request to the counter end-point
   var request = new XMLHttpRequest();
   
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function(){
       
       if(request.readyState === XMLHttpRequest.DONE){
           
           if (request.status === 200){
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       }
   };
   
   
   //Make the Request
   request.open('GET', 'http://bopche070269.imad.hasura-app.io/counter', true);
   request.send(null);
}

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onClick = function(){
    var names = ['name1', 'name2', 'name3', 'name4'];
    var list = '';
    for (var i = 0; i < names.length; i++){
        list += '<li>' + 'names[i]' + '</li>';        
    }
    var ul = document.getElementById('nameList');
    ul.innerHTML = list;
};