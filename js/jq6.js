//keyup
//keydown
//keypress
let x=0;
Text(x+=1)




$(document).ready(function(){
    $("input").keyup(function(){
        $(this).css("background-color","green");
    })
    $("input").keydown(function(){
        $(this).css("background-color","red");
    })


});


