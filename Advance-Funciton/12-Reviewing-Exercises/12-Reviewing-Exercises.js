//forEach
/*
const name = ["Hung", "Yen", "Chau", "Ngan", "Trang"];
name.forEach((name, index) => {
  console.log(`Ten thu: ${index}, ten la: ${name}`);
});
*/

//Map: Dùng để tạo ra một bản sao mảng mới từ một mảng ban đầu.
const nums = [1, 2, 3, 4, 5];
console.log(nums);
//2 Cách viết
//Truyền thống
const newArray = nums.map(function (currentValue) {
  return currentValue * 2;
});
console.log(newArray);

//Sử dụng Arrow Functon:
const newArrayArow = nums.map((currentValue) => {
  return currentValue * 2;
});
console.log(newArrayArow);
console.log("-------------------------");

const students = [
  { id: 1, name: "Hung", age: 20 },
  { id: 2, name: "Chau", age: 20 },
  { id: 3, name: "Yen", age: 20 },
  { id: 4, name: "Ngan", age: 19 },
];

const studentName = students.map((student) => student.name);
const studentAge = students.map((age) => age.age);
console.log(studentName);
console.log(studentAge);
console.log("--------------------------------------------------------");
//Thay đổi cấu trúc dữ liệu trong object không ảnh hưởng đến đối tượng gốc
const products = [
  { name: "Keyboard", price: 100 },
  { name: "Mouse", price: 50 },
];

const productsWithTax = products.map((item) => {
  return {
    ...item, // Copy lại các thuộc tính cũ
    priceWithTax: item.price * 0.1,
  };
});
console.log(products);
console.log(productsWithTax);
console.log("--------------------------------------------------------");

//Filter: Dùng để lọc phần tử trong mảng để thoả mãn điều kiện, trả về một mảng mới chứa các phần tử thoả mãn điều kiện, giữ nguyên mảng gốc

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const eventNumbers = numbers.filter((num) => num % 2 === 0);
console.log(eventNumbers);
console.log("--------------------------------------------------------");

const products_1 = [
  { name: "Bàn phím", price: 150 },
  { name: "Chuột", price: 50 },
  { name: "Tai nghe", price: 80 },
  { name: "Lót chuột", price: 15 },
];

const cheapProducts = products_1.filter((product) => product.price < 100);
console.log(products_1);
console.log(cheapProducts);
console.log("--------------------------------------------------------");

const duplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = duplicates.filter((num, index, array) => {
  //IndexOf trả về vị trí đầu tiên xuất hiện của phần tử
  //vị trí hiện tại trùng với vị trí xuất hiện đầu tiên thì giữ lại
  return array.indexOf(num) === index;
});
console.log(uniqueNumbers);

//addEventListener
const button = document.querySelector(".js-button");
button.addEventListener("click", () => alert("Anh click vào em rồi !!"));

const inputElement = document.querySelector(".js-input");
inputElement.addEventListener("keyup", function (event) {
  console.log(`Bạn vừa nhấn phím ${event.key}`);
});
