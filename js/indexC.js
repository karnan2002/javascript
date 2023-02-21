/*
function ifstatement(marks){
    let grade;
    if(marks>=90){
        console.log('you are pss');
    }
    else if(marks>=80){
        console.log('you are medium')
    }
    else{
        console.log('you are fail');
    }


    return grade;
}

ifstatement(85);
*/

function switchstatement(operators){
    switch(operators){
        case 'A':
            console.log('apple');
        break;
        case 'B':
            console.log('banana');
            break;
            default:
            console.log('unknown')    
            
                }
}
switchstatement('B');