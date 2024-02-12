const a = 0;
const b = 0;
const c = 0;

const priceA = a * 12;
const priceB = b * 14;
const priceC = c * 16;

const combiAC = (priceA + priceC)/2
const combiAB = (priceA + priceB)/2
const combiBC = (priceB + priceC)/2


export const fn = (a, b, c) => {
    if (((a + b + c) <= 39) && (a >= 0 && b >= 0 && c >= 0 ) && ((a + b + c) % 3 === 0)) {



    } else {
        "throw error"
    }


};


