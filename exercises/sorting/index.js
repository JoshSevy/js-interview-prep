// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  //return the sorted array
  return arr;
}

function selectionSort(arr) {
  //Implementation for selectionSort
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i;
    for (let j = i + 1; arr.length; j++) {
      if (arr[j] < indexofMin) {
        indexofMin = j;
      }
    }
    if (indexofMin !== i) {
      let lesser = arr[indexofMin];
      arr[indexofMin] = arr[i];
      arr[i] = lesser;
    }
  }
  //return sorted array
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
