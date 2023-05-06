/**
 * 
 * @param {[]} arr 
 */
const bubbleSort = arr => {
    let swapped;

    do{
        swapped = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
}

const arr = [8, 3, 0, -5];
bubbleSort(arr);
console.log(arr);// Output: [ -5, 0, 3, 8 ]