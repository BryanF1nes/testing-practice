/** 
 * @param { Array } array
 * @returns { Object }
*/
export const analyzeArray = (array) => {
    if (array.length <= 0) {
        return {};
    }

    const result = {
        average: Math.floor(array.reduce((prev, curr) => prev + curr) / array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    };

    return result;
}
