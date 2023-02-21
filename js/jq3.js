//focus in 
//focus out
//out
//in
//one

/*

$(document).ready(function(){
    $("div").focusin(function(){
        $(this).css("background-color","green")
    });
    $("div").focusout(function(){
        $(this).css("background-color","blue")
    });
});
*/

/*
$(document).ready(function(){
    $("p").one("click ,dbllick",function(){
      $(this).animate({fontSize:"+=10px"})
    });
})
*/

$(document).ready(function(){
    $("p").on("click",function(){
        alert("event selector")
    });
});