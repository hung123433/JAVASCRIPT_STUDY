/** Nhóm các kiểu dữ liệu tham chiếu - reference-types */

/**
 * Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (stack) má sẽ được tham chiếu đến địa chỉ trong heap memory
 * Các giá trị tham chiếu có thể được thay đổi sau khi chúng được tạo ra.
 * Khi gán một đối tượng A cho một đối tượng B, thì cả A và B sẽ cùng được tham chiếu đến một đối tượng chứ không tạo ra bản sao độc lập riêng biệt.
 * Reference Types bao gồm các kiểu dữ liệu phổ biến sau:
 */

//Object (Đối tượng): Đại diện cho một tập hợp các thuộc tính và phương thức.
let developer = {
  name: "Nguyen Van Hung",
  age: 18,
  greet: function () {
    console.log(`Xin chao ! Toi la:${this.name} ! Toi la Coder Benginer`);
  },
};
developer.greet();
console.log(developer.name);
console.log("----------------------------");
//Array (Mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị.
let colors = ["red", "black", "yellow", "pink"];
console.log(colors);
console.log(colors[0]);
console.log("----------------------------");
//Function: Đại diện cho các hàm xử lý, cũng được coi là một loại đối tượng đặc biệt.
function weatherInfo(city) {
  console.log(`The weather in ${city} is really hot today`);
}
weatherInfo("HaiPhong");
