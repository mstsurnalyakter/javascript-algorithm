/**
 * 
 * @param {number} n 
 * @returns {number[]}
 */
const pascalTriangleRecursive = n => {
    if (n === 0) {
      return [1];
    }
  
    const curr = n + 1;
    const prev = curr - 1;   
    const arr = [];
    const line = pascalTriangleRecursive(n - 1);
   
    for (let  i = 0;  i < curr;  i += 1) {
      const left = (i - 1) >= 0 ? line[i - 1] : 0;
      const right = i < prev ? line[i] : 0;
  
      arr[i] = left + right;
    }
    return arr;
  }
   
  console.log(pascalTriangleRecursive(3)); // Output: [ 1, 3, 3, 1 ]
  console.log(pascalTriangleRecursive(4)); // Output: [ 1, 4, 6, 4, 1 ]