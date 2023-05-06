/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
const isPalindrome = str => {
    str = str.toLocaleLowerCase();
       
      const reversed = str
                      .split('')
                      .reverse()
                      .join('');
  
      if(str === reversed){
          return true;
      }else{
          return false;
      }
  }
   
  console.log(isPalindrome("Madam")); // Output: true
  console.log(isPalindrome("Love")); // Output: false