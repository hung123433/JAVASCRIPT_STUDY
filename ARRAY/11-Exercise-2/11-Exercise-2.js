//11o
function findSearch(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "search") {
      cnt++;
    }
  }
  if (cnt !== 0) {
    return cnt;
  } else {
    return -1;
  }
}
console.log(findSearch(["hello", "world", "search", "good", "search"]));
console.log(findSearch(["not", "found"]));

//11p
function findSearchUpdate(array) {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "search") {
      index++;
      break;
    }
  }
  return index;
}
console.log(findSearchUpdate(["hello", "world", "search", "good", "search"]));

//11q
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}
console.log(findIndex(["green", "red", "blue", "red"], "red"));
console.log(findIndex(["green", "red", "blue", "red"], "yellow"));

//11r
function removeEgg(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEgg(["egg", "apple", "egg", "egg", "ham"]));

//11f
function removeEggUpdate(foods) {
  let result = [];
  let cnt = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && cnt < 2) {
      cnt++;
      continue;
    }
    result.push(foods[i]);
  }
  return result;
}
console.log(removeEggUpdate(["egg", "apple", "egg", "egg", "ham"]));

//11t
function removeEggLast(foods) {
  let result = [];
  let cnt = 0;
  for (let i = foods.length - 1; i >= 0; i--) {
    if (foods[i] === "egg" && cnt < 2) {
      cnt++;
      continue;
    }
    result.push(foods[i]);
  }
  result.reverse();
  return result;
}
const food = ["egg", "apple", "egg", "egg", "ham"];
console.log(removeEggLast(food));
console.log(food);
//11u: Co the su dung .slice de khong lam thay doi mang goc

//11v: Fizz Buzz
/*
for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
*/

//11w
function unique(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }
  return result;
}
console.log(unique(["green", "red", "blue", "red"]));
console.log(unique(["red", "green", "green", "red"]));
