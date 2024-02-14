// Variable declaration

const a = 0;
const b = 0;
const c = 0;
let combiEmpanadas = 0;


// Function

export const fn = (a, b, c) => {

    if (((a + b + c) < 40) && ((a + b + c) >= 3) && (a >= 0 && b >= 0 && c >= 0) && (a + b + c) % 3 === 0) {

        combiEmpanadas = ((a * 12) + (b * 14) + (c * 16)) / 3 // obtención de la media de la compra de los productos

        while (combiEmpanadas % 1 !== 0) { // bucle que suma 0,1 hasta llegar al siguiente numero entero.
            combiEmpanadas += 0.1;
            combiEmpanadas = Math.round(combiEmpanadas * 10) / 10; // Corrección de errores con la suma de decimales.
        }

    } else {
        throw error // evaluación de los erroes
    }
    return combiEmpanadas
};

fn(3, 3, 0)
