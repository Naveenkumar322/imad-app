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