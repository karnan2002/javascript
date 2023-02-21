//spread and rest operators for array

/*let electrinc = ['fan','light','tv','dvd'];
 joinedelectrinc = [...electrinc,'keyboard' ];
 console.log(joinedelectrinc);
let [fan,...rest] = joinedelectrinc;
console.log(fan);*/


//spread operatoprs for objects

let details={
    name : 'karna',
    age : 26,
    work : 'vip'
}

details={
    ...details,
    boy: 'male'
}

let {work,age,...rest}=details;
console.log(rest);