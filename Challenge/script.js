//test try catch

// function sayName(name = ''){
//     if (name === '')
//         throw 'Name Invalid!'
// }

// try {
//     sayName()
// } catch (error) {
//     console.log(error)
// }


function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79 
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <  60 && score >= 0


    switch (score) {
        case scoreA:
            scoreFinal = "A"
            break;

        case scoreB:
            scoreFinal = "B"
            break;

        case scoreC:
            scoreFinal = "C"
            break;

        case scoreD:
            scoreFinal = "D"
            break;

        case scoreF:
            scoreFinal = "F"
            break;

        default:
            scoreFinal = "Invalid"
            break;
    }

    if (scoreA) {
        scoreFinal = "A"
    }else if(scoreB){
        scoreFinal = "B"
    }else if(scoreC){
        scoreFinal = "C"
    }else if(scoreD){
        scoreFinal = "D"
    }else if(scoreF){
        scoreFinal = "F"
    }else{
        scoreFinal = "Invalid"
    }

    
    return scoreFinal
}
    
console.log(getScore(95))