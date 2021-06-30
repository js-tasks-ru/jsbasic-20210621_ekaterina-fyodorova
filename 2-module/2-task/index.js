function isEmpty(obj) {
  let counter = 0;
  for (let key in obj) {
    return false;
  }
  return true;
}
