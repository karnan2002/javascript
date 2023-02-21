//ready(document and window)
//rezize
//scroll
//select
//submit

/*

$(document).ready(function(){
   let x=0;
    $("div").scroll(function(){
       $("span").text(x+=1);
    })
})
*/

$(document).ready(function(){
    $("form").submit(function(){
        alert("sumbmitted");
    });
});