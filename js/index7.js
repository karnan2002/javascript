//array methods
//reduce
//map
//filter

const marks = [46,64,78,90,34,22,48,34,11,10];
const sum = marks.reduce((ac,a)=>ac+a);
console.log(sum);
const grade  = marks.map(e=> e>=34 ? "pass":"fail");
console.log(grade);
const pass = marks.filter(e=> e>=34);
console.log(pass);