/**
 * 
 * @param {[]} set1 
 * @param {[]} set2 
 * @returns {[][]}
 */
const cartesianProduct = (set1, set2) => {
    
    if (!set1 || !set2 || !set1.length || !set2.length) {
      return null;
    }
   
    const product = [];
  
    for (let i = 0; i < set1.length; i += 1) {
      for (let j = 0; j < set2.length; j += 1) {
        product.push([set1[i], set2[j]]);
      }
    }
    return product;
  }
  
  const set1 = [1, 2];
  const set2 = [3, 4, 5];
  console.log(cartesianProduct(set1, set2)); // Output:[[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]