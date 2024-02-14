
// variable declaration
let totalPie = 0;

// Function
export const fn = (pieA, pieB, pieC) => {

    // error handling within the if conditional
    if (((pieA + pieB + pieC) < 40) && ((pieA + pieB + pieC) >= 3) && (pieA >= 0 && pieB >= 0 && pieC >= 0) && (pieA + pieB + pieC) % 3 === 0) { 

        //calculate of the average of the products
        totalPie = ((pieA * 12) + (pieB * 14) + (pieC * 16)) / 3

        // decimal correction with while loop
        while (totalPie % 1 !== 0) { 
            totalPie += 0.1;
            //loop control with math.round and error correction with *10 / 10
            totalPie = Math.round(totalPie * 10) / 10; 
        }
    } else {
        throw error 
    }
    return totalPie
};

fn(11, 10, 9)