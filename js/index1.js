//if else 

function getgrade(marks){
    let grade;
    if(marks>=60)
    {
        console.log('pass');
    }
    else if(marks>55){
        console.log('you got a B')

    }
    else if(marks>51){
        console.log('you got a C')

    }
    else{
        console.log('fail');
    }

    return grade;
}
getgrade(52);