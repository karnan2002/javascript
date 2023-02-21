//passing by value
//no modify this is primitive values
/*
function updatevalue(a){
    a++;

}

let i =10;
console.log(i);
updatevalue(i);
console.log(i);
*/

//refernce type
/*
function updatevalue(a){
    a.age = 34
}

obj={
    name:'vijay',
    age:23,
}

console.log(obj);
updatevalue(obj);
console.log(obj);

*/



//string template & interpolation

let name="raj";
let place="madurai";

let text= ` name:${name} 
            place:${place}
               `;
               console.log(text);


