const flattenArray = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattenArray(arr[i]));
    } else {
      flat = flat.concat(arr[i]);
    }
  }
  return flat;
};

export default flattenArray;
