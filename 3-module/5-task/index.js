function getMinMax(str) {

  let newStr = str.split(' ').join();
  let arr = newStr.split(',');
  let numbers = arr.filter(item => item && isFinite(item));

  return {
    'max': Math.max(...numbers),
    'min': Math.min(...numbers)
  };

}
