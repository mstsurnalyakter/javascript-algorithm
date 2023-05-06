/**
 * 
 * @param {number} n - zero based
 * @returns {number[]}
 */
const pascalTriangle = n => {
    const arr = [1];
  
    for (let i = 1; i < n + 1; i += 1) {
      arr[i] = (arr[i - 1] * (n - i + 1)) / i;
    }
  
    return arr;
  }
   
  console.log(pascalTriangle(4)); // Output: [ 1, 4, 6, 4, 1 ]
  console.log(pascalTriangle(3)); // Output: [ 1, 3, 3, 1 ]