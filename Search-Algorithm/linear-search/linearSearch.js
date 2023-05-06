/**
 * 
 * @param {Array} arr 
 * @param {number} target 
 * @returns {number}
 */
const linearSearch = (arr, target) => {
    for(let i = 0; i <arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

// Big-O = O(n)

const arr = [2, 6, 1, 9];
console.log(linearSearch(arr, 9)); // Output: 3
console.log(linearSearch(arr, 2)); // Output: 0