/*

function btnclick(){
    console.log('button clicked');
}

function keypress(e){
    if(e.code==="enter")
    console.log(e.target.value);
}

function eventhandler(e){
    console.log("this is new",e.type);
}
*/

document.getElementById('p1').addEventListener('click',function(e){
    console.log(e.target.innertext);
})