let global_arr = [1, 3, 15, 5, 2];
let sorted = [9, 2, 3, 4, 5, 6, 7, 8, 1];
// bubble
function bubbleSort(arr) {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);
}
bubbleSort(global_arr);
