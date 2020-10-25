module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0){
    return []; 
  }

  matrix.map(function(i, ind){
    return (ind % 2 !== 0) ? i.reverse() : i;
});
  return matrix.flat();
}