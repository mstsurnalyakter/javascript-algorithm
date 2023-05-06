/**
 * 
 * @param {number} numRows 
 * @returns {number[][]}
 */
const generate = numRows => {
    const triangle = [];
    for(let i = 0; i<numRows; i++){
        const newArr = [];
        for(let j = 0; j<=i; j++){
              if(j === 0 || j === i){
                  newArr.push(1);
              }else{
                  newArr.push(triangle[i-1][j-1] + triangle[i-1][j]);
              }
        }
        triangle.push(newArr)
    }
    return triangle;
       
};
console.log(generate(5)); //Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]