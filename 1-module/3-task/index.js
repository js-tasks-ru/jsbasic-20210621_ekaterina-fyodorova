function ucFirst(str) {
  for (let i = 0; i < str.length; i++) {
    str = str[0].toUpperCase() + str.slice(1);
  }
  return str;
}

