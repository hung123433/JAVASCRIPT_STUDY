//12f

const multiply = (number_1, number_2) => number_1 * number_2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));

//12i
//.forEach
/*

*/
const countPositive = (nums) => {
  let cnt = 0;
  nums.forEach((nums) => {
    if (nums > 0) {
      cnt++;
    }
  });
  return cnt;
};

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

//12f
const addNum = (array, nums) => array.map((num) => num + nums);
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));

//12n
const removeEggs = (foods) => {
  let cnt = 0;
  return foods.filter((food) => {
    if (food === "egg" && cnt < 2) {
      cnt++;
      return false;
    }
    return true;
  });
};
console.log(removeEggs(["egg", "apple", "egg", "egg", "ham"]));

//12
