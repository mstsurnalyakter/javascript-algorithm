/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */
const isPalindrome = str => {
   str = str.toLocaleLowerCase();
   let left = 0;
   let right = str.length - 1;
 
   while (left < right) {
     if (str[left] !== str[right]) {
       return false;
     }
     left += 1;
     right -= 1;
   }
   return true;
 }
  let str = 'Madam';
  console.log(isPalindrome(str)); // Output: true