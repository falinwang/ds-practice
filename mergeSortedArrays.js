// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0, 3, 4, 4, 6, 30, 31]


function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // Check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item)
    // If one of that is undefine, means empty
    if (!arr2Item || !arr1Item || arr1Item < arr2Item) {
      // should push arr1 item to new array
      mergedArray.push(arr1Item)
      arr1Item = arr1[i]
      i++
    } else {
      // should push arr2 item to new array
      mergedArray.push(arr2Item)
      arr2Item = arr2[j]
      j++
    }
  }

  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// [ 0, 3, 4, 4, 6, 30, 31 ]