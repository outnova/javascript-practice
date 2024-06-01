/*let twoSum = function(nums, target) {
    nums.forEach((b, j) => {
        if((i !== j) && ((a + b) === target)) {
            retorno[0] = i
            retorno[1] = j
        }
    })
    return retorno
}
*/

let twoSum = function(nums, target) {
    const numMap = {}; // Creamos un mapa para almacenar los números y sus índices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculamos el complemento necesario

        if (numMap[complement] !== undefined) {
            return [numMap[complement], i]; // Si encontramos el complemento en el mapa, retornamos los índices
        }

        numMap[nums[i]] = i; // Almacenamos el número actual y su índice en el mapa
    }

    return []; // Si no encontramos ningún par, retornamos un arreglo vacío
};
/*
 
@param {number[]} nums
@param {number} target
@return {number[]}
*/
//let twoSum = function(nums, target) {
    // iterar cada elemento del arreglo
        // para un elemento a, indice i
        // itero cada elemento del arreglo
            // para un elemento b, indice j
            // si i es igual a j, me lo salto
            // si a + b es igual al target, retorno [i, j]


    // nums.forEach((a, i) => {
    //     nums.forEach((b, j) => {
    //         if ((i !== j) && ((a + b) === target)) {
    //             retorno[0] = i
    //             retorno[1] = j
    //         }
    //     })
    // })

    //return retorno
//};