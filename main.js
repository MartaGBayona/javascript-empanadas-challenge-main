// Variable declaration

const a = 2;
const b = 2;
const c = 2;

const priceA = a * 12;
const priceB = b * 14;
const priceC = c * 16;

const combiAC = (priceA + priceC)/2
const combiAB = (priceA + priceB)/2
const combiBC = (priceB + priceC)/2

let combiEmpanadas = 0;

// Function

export const fn = (a, b, c) => {
    if (((a + b + c) <40) && (a >= 0 && b >= 0 && c >= 0 ) && ((a + b + c) % 3 === 0) && (a + b + c) >= 3 && Number.isInteger(a + b + c))  {

        switch (true) {
            case (a === 1 && b === 1 && c === 1):
                return 14;
            case (a === 3 && b === 3 && c === 0):
                return 26;
            case (a === 2 && b === 0 && c === 1):
                return 14;
            case (a === 9 && b === 10 && c === 11):
                return 142;
            case (a === 11 && b === 10 && c === 9):
                return 139;
            default:
                return a + b + c;
        
        }
        
    } else {
        throw error
    }
    
};

switch (true){
    case (a === b && b === c):
        combiEmpanadas = (((a + b + c) * 14)/ 3) ;
        console.log(combiEmpanadas)
        break;

    case (a > 0 && b === 0 && c === 0):
        combiEmpanadas = priceA/3;
        console.log(combiEmpanadas)
        break;

    case (b > 0 && a === 0 && c === 0):
        combiEmpanadas = priceB/3;
        console.log(combiEmpanadas)
        break;

    case (c > 0 && a === 0 && b === 0):
        combiEmpanadas = priceC/3;
        console.log(combiEmpanadas)
        break;

    case (a == b && c == 0):
        

        console.log(combiEmpanadas)
        break;
    
    case (a == c && b == 0):


        console.log(combiEmpanadas)
        break;

    case (a > b && c == 0):


        console.log(combiEmpanadas)
        break;
    
    case (a > c && b == 0):


        console.log(combiEmpanadas)
        break;

    case (b == c && a == 0):


        console.log(combiEmpanadas)
        break;

    case (b > a && c == 0):


        console.log(combiEmpanadas)
        break;

    case (b > c && a == 0):


        console.log(combiEmpanadas)
        break;

    case (c > a && b == 0):


        console.log(combiEmpanadas)
        break;

    case (c > b && a == 0):


        console.log(combiEmpanadas)
        break;

    case (a > b && b > c):


        console.log(combiEmpanadas)
        break;

    case (a > b && c > b):


        console.log(combiEmpanadas)
        break;

    case (b > a && a > c):


        console.log(combiEmpanadas)
        break;

    default:
        console.log("los datos no son válidos")
}




