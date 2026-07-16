/**
 * Trong JS, vòng lặp là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi thoả mãn một điều kiện nào đó.
 */

//for-of: Dùng để lặp qua các giá trị của một iterable object (Những đối tươngj có thể lặp) , phổ biến như string, array,...

let nums = [1, 2, 3, 45, 6, 7, 8, 9];
for (let num of nums) {
  console.log(`Num: ${num}`);
}
console.log("------------------");

let str = "HungNguyen";
for (let char of str) {
  console.log(`Char: ${char}`);
}

let developer = {
  username: "HungNguyen",
  country: "VietNam",
  gender: "male",
};
for (let key of developer) {
  console.log(`${key}: ${developer[key]}`);
}
