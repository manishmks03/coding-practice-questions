function mostFrequenMeal(array) {
  const obj = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element] = obj[element] + 1;
    }
  }
  const maxCount = Math.max(...Object.values(obj));
  let smallest = null;
  Object.keys(obj).map(key => {
    if (obj[key] === maxCount) {
      if (!smallest) {
        smallest = key;
      } else if (smallest > key) {
        smallest = key;
      }
    }
  });
  console.log("Smallest : ", obj, smallest);
  return smallest;
}

const array = [1, 4, 4, 4, 3, 2, 1, 6, 1];

console.log(mostFrequenMeal(array));
