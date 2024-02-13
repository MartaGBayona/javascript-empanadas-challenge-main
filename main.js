// Variable declaration

const a = 0;
const b = 0;
const c = 0;

const priceA = a * 12;
const priceB = b * 14;
const priceC = c * 16;

const combiAC = (priceA + priceC)/2
const combiAB = (priceA + priceB)/2
const combiBC = (priceB + priceC)/2

let combiEmpanadas = 0;

// Function

export const fn = (a, b, c) => {

    if (((a + b + c) <40) && ((a + b + c) >=3)  && (a >= 0 && b >= 0 && c >= 0 ) && (a + b + c) % 3 === 0)  {
        switch (true) {
            case (a === b && b === c):
                combiEmpanadas += (((a + b + c) * 14) / 3);
                break;
            case (a > b):
                combiEmpanadas += (a - b) * combiAB;
                break;
            case (a === b && c === 0):
                combiEmpanadas += (((a + b) / 2) * combiAB);
                break;
            case (c > a):
                combiEmpanadas += (c - a) * combiAC;
                break;
            case (a === b && c === 0):
                combiEmpanadas += (((a + b) / 2) * combiAB);
                break;
            default:
                break;
        }
    } else {
        throw error
    }
    console.log("Resultado de combiEmpanadas:", combiEmpanadas);
    return combiEmpanadas;
};

fn(3, 3, 0)


// if(a === b && b === c) {
//     combiEmpanadas += (((a + b + c) * 14)/ 3) ;
// }
// if (a > b) {
//     combiEmpanadas += (a - b) * combiAB;
// }
// if (a === b && c === 0) {
//     combiEmpanadas += (((a + b)/3)*combiAB)
// }




