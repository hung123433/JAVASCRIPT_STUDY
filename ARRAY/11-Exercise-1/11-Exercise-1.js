//11-a
let nums = [10, 20, 30];
console.log(nums);
nums[2] = 99;
console.log(nums);

//11-b
function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}
getLastValue([1, 20, 22, 24, 5]);
getLastValue(["hi", "hello", "good"]);

//11-c
function arraySwap(array) {
  const lastIndex = array.length - 1;
  let temp = array[0];
  array[0] = array[lastIndex];
  array[lastIndex] = temp;
  console.log(array);
}
arraySwap([1, 20, 22, 24, 5]);
arraySwap(["hi", "hello", "good"]);

//11-d
// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

//11-f
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i += 2;
// }
// let j = 5;
// while (j >= 0) {
//   console.log(j);
//   j--;
// }

//11-g
const num = [1, 2, 3];
for (let i = 0; i < num.length; i++) {
  num[i] = num[i] * 2;
}
console.log(num);

//11h
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 1;
  }
  console.log(array);
}
addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

//11i
function addNum(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] += num;
  }
  console.log(array);
}
addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);
//11j
function addArrays(array1, array2) {
  let arrayTotal = [];
  for (let i = 0; i < array1.length; i++) {
    arrayTotal[i] = array1[i] + array2[i];
  }
  console.log(arrayTotal);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);
//11k
function countPositive(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      cnt++;
    }
  }
  console.log(cnt);
}
countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

//11l
function minMax(array) {
  let result = {
    min: 0,
    max: 0,
  };
  if (array.length === 0) {
    result.min = null;
    result.max = null;
  } else if (array.length === 1) {
    result.min = array[0];
    result.max = array[0];
  }
  for (let i = 0; i < array.length; i++) {
    if (result.max < array[i]) {
      result.max = array[i];
    }
    if (result.min > array[i]) {
      result.min = array[i];
    }
  }
  console.log(result);
}

minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);
minMax([]);
minMax([3]);

//11h
function countWords(words) {
  let result = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }
  return result;
}
console.log(countWords(["apple", "grape", "apple", "apple"]));
