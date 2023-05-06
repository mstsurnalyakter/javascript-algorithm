/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
const prime = n => {
   
    if (n % 1 !== 0) {
      return false;
    }
      
     if(n <= 1) {
      return false;
    }
  
    if (n <= 3) {
       
      return true;
    }
  
    if (n % 2 === 0) {
      return false;
    }
     
    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(prime(2)); // Output: true
  console.log(prime(1)); // Output: false
  console.log(prime(5)); // Output: true