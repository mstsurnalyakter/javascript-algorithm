/**
 * 
 * @param {[]} arr 
 * @param {number} target 
 * @returns {number}
 */
const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        let midVal = arr[mid];

        if(target === midVal){
            return mid;
        }

        if(target < midVal){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}

const arr = [1, 3, 6, 8];
console.log(binarySearch(arr, 3)); // Output : 1