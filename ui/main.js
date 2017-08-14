//Counter code
var button = document.getElementById('conter');
var counter = 0;

button.onclick = function (){
   
   //make the request to counter endpoint
   
   //capture the response and store it in a variable
   
   //Render the variabke in the correct span
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
    
};