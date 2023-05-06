/**
 * 
 * @param {[]} arr 
 * @returns {[]}
 */
const quickSort = arr => {
    let len = arr.length;
    if(len < 2){
        return arr;
    }

    let  pivot = arr[len - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < len - 1; i++){
        let val = arr[i];
        if(val < pivot){
            left.push(val);
        }else{
            right.push(val);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 3, 0, -5];
console.log(quickSort(arr)); // Output: [ -5, 0, 3, 8 ]