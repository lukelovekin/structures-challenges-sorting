function countUniqueValues(arr) {
  let counter = 0;
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (temp !== arr[i]) {
      counter++;
      temp = arr[i];
    }
  }
  console.log(counter);
}

// OR of course
// let unique = [...new Set(arr)]
