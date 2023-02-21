//mouse up
//mouse down
//mouse enter
//mouse leave

/*

$(document).ready(function(){
$(window).mousemove(function(event){
    $("span").text(event.pageX+","+event.pageY+"")
});
  /*  $("div").mouseup(function(){
        $("h2").text("mouseup");
    });
    $("div").mousedown(function(){
        $("h2").text("mousedown");
    });
    $("div").mouseenter(function(){
        $("h2").text("mouse enter");
    });
    $("div").mouseleave(function(){
        $("h2").text("mouseleave");
 });
 $("div").mouseout(function(){
    $("h2").text("mouseout");
});
$("div").mouseover(function(){
    $("h2").text("mouseover");
});*/

$(document).ready(function(){
    $("input").keyup(function(){
        $("this").css("background-color","green");
    })
    $("input").keydown(function(){
        $("this").css("background-color","red");
    })


})









