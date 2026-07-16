/*-----------Const---------- */
//Hoisting: Biến khai báo bằng const cũng được hoisting (di chuyển lên đầu phạm vi của khối(scope) của nó) nhưng không được khởi tạo giá trị mặc định. Nên không thể sử dụng trước khi khai báo biến.

// console.log("Name Const: ", nameConst);

//Khai báo
const nameConst = "HungNguyenHocCoder";
console.log("Name Const: ", nameConst);

//Tái khai báo: Không thể tái khai báo cùng một biến nhiều lần
// const nameConst = "HungNguyenHocJs";
// console.log("Name Const: ", nameConst);

//Gán lại giá trị: Không thể gán lại giá trị
// nameConst = "HungNguyen";
// console.log("Name Const: ", nameConst);
