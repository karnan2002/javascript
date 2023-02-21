//array functiom
//MAP
//FILTER
//REDUCE


/*const marks =[34,45,56,67,78,90,100,500];

let grade = marks.map(e=>e>=45 ? 'pass':'fail');
let grade1=marks.filter(e=>e>=30);
console.log(grade1);
console.log(grade);

const sum = marks.reduce((num,e)=>num+e,0);
console.log(sum);
*/
/*
let names=['thala','ajith','vijay','arjun'];
let updatenames=[...names,'vickram'];
let[vickram,surya,...rest]=updatenames;
console.log(vickram);
console.log(updatenames);
*/

let vicky={
    name :'raj',
    age:24,
}
vicky={
    ...vicky,
    work:'Vip',
}

let {work,age,...rest}=vicky;
console.log(work)
console.log(vicky);