/*Nhóm các kiểu dữ liệu nguyên thuỷ - Primitive Types */

/**
 * Các giá trị nguyên thuỷ được lưu trữ trực tiếp trong ngăn xếp (stack)
 * Khi một giá trị nguyên thuỷ được gán cho một biến, giá trị này không thẻ thay đổi
 * Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra
 * Primitive Types bao gồm các kiểu dữ liệu sau:
 */

//Number: Đại diện cho số (bao gồm cả số nguyên với số thập phân)
let age = 17;
let productPrice = 0.99;
console.log("age: ", age);
console.log("productPrice: ", productPrice);
console.log("------------------------------");
//String: Đại diện cho chuỗi kí tự
let name = "Nguyen Van Hung";
console.log("Name: ", name);
console.log(typeof name);
console.log("------------------------------");

//Boolean: Đại diện cho các giá trị đúng (true) hoặc các giá trị sai (false)
let isFree = true;
console.log("isFree: ", isFree);
console.log(typeof isFree);
console.log("------------------------------");

//Null: Đại diện cho kiểu dữ liệu rông hoặc không có gì
let nullValue = null;
console.log("nullValue: ", nullValue);
console.log(typeof nullValue);
console.log("------------------------------");

//Undefined: Đại diện cho một biến chưa được gán giá trị.
let undefinedValue;
console.log("undefinedValue: ", undefinedValue);
console.log(typeof undefinedValue);
console.log("------------------------------");

//Symbol (Xuất hiện từ ECMA Script 6 - ES6): Đại diện cho một giá trị Unique: Độc nhất và bất biến, thường được sử dụng làm khoá và id trong object
let uniqueId = Symbol("id-2009");
console.log("uniqueId: ", uniqueId);
console.log(typeof uniqueId);
console.log("------------------------------");

//BigInt (Xuất hiện từ ECMAScript 2020 - ES2020): Đại diện cho các số nguyên có giá trị rất lớn, lớn hơn kiểu dữ liệu Number ở trên.
let bigNumber01 = BigInt(9007199254740991);
console.log(bigNumber01);
console.log(typeof bigNumber01);
let bigNumber02 = 9007199254740991n;
console.log(bigNumber02);
console.log(typeof bigNumber02);
console.log("------------------------------");
