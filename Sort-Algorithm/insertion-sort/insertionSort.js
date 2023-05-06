/**
 * 
 * @param {[]} arr 
 */
const insertionSort = arr => {
    for(let i = 1; i < arr.length; i++){
        let inserNum = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > inserNum){
            arr[j + 1] = arr[j];
            j = j -1;
        }
        arr[j + 1] = inserNum;
    }
}

const arr = [8, 3, 0, -5];
insertionSort(arr);
console.log(arr); // Output: [ -5, 0, 3, 8 ]