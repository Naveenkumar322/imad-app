//Counter code
var button = document.getElementById('conter');

button.onclick = function (){
   
   //make the request to counter endpoint
   var request = new XMLhttprequest();
   
    
   //capture the response and store it in a variable
   request.onreadystatechange = function() {
       if (request.readystate === XMLHttpRequest.DONE) {
           //Take some action
           if (request.status === 200) {
         var counter = request.responseText;
         var span = document.getElementById('count');
   span.innerHTML = counter.toString();
           }
           }
          };
          //make the request
          request.open('GET', 'http://naveenkumar322.imad.hasura-app.io/counter',true);
          request.send(null);
};

//Sumbit name
var nameInput = document.getElementById('name');
var name =nameInput.value;
var submit =document.getElementById('Submit_btn');
// make a request to server and send the name.

//capture the list of names and render it as a list
var names = ['name1','name2','name3','name4'];
var list='';
for (var i=0; i< names.lenght; i++) {
    list +='<li>' + names [i] + '</li>';
}

var ul = document.getElementById('namelist');
ul.innerHTML = list;
};