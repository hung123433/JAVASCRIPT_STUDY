/*--------Let---------*/

//Hoisting: Biến khai báo bằng let cũng được hoisting (di chuyển lên đầu phạm vi khối (scope) của nó) nhưng lại không được khởi tạo giá trị mặc định ban đầu nào cả. Nên không thể sử dụng biến trước khi khai báo

// console.log("Name let: ", nameLet);

//Khai báo
let nameLet = "HungNguyenHocCode";
console.log("Name let: ", nameLet);

//Tái khai báo biến: Không thể tái khai báo 1 biến nhiều lần
// let nameLet = "HungNguyenHocJs";
// console.log("Name let: ", nameLet);

//Gán lại giá trị: Với biến let có thể gán được lại giá trị
nameLet = "HungNguyen";
console.log("Name let: ", nameLet);
