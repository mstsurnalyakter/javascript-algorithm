/**
 * 
 * @param {number} n - zero based
 * @returns {number[]}
 */
const pascalTriangle = n => {
    const arr = new Array(n + 1);
    arr[0] = arr[n] = 1;
    
    for(let i = 1, j = n; i < n; i++, j--){
        arr[i] = arr[i - 1]*j/i;
    }
    return arr;
}

console.log(pascalTriangle(4)); // Output: [ 1, 4, 6, 4, 1 ]
console.log(pascalTriangle(3)); // Output: [ 1, 3, 3, 1 ]
