
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined || matrix.length == 0){
    return [];
  }
  let array = [];
  for(let i =0; i < matrix.length; i++){
    let tempArr = matrix[i];
    if(i%2 != 0){
      tempArr = tempArr.reverse();
    }
    for(let j =0; j < tempArr.length; j++){
      array.push(tempArr[j]);
    }
  }
  return array;
}
