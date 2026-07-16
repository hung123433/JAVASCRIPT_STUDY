//Hoisting: Biến khai báo bằng var sẽ được hoisting (di chuyển lên đầu phạm vi khối scope của nó) và đồng thời biến đó được khởi tạo giá trị mặc định ban đầu là undefined. Cho nên chúng ta có thể sử dụng biến đó trước khi khai báo mà không gặp lỗi

console.log("Name Var: ", nameVar);

//Khởi tạo biến
var nameVar = "HungNguyenHocCode";
console.log("Name Var: ", nameVar);

//Tái khai báo biến: Có thể tái khai báo biến var trong cùng một biến var mà không gây lỗi
var nameVar = "HungNguyenHocJs";
console.log("Name Var: ", nameVar);

//Gán lại giá trị: Có thể gán lại giá trị
nameVar = "HungNguyen";
console.log("Name Var: ", nameVar);
