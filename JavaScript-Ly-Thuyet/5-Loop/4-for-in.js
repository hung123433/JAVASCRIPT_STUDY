/**
 * Trong JS, vòng lặp là một cấu trúc điều khiển dùng để lặp lại một đoạn mã nhiều lần.
 * Thường sử dụng khi cần thực hiện một hành động nhiều lần cho đến khi thoả mãn một điều kiện nào đó.
 */

//For - in: Lặp qua các thuộc tính đối tượng
let developer = {
  username: "HungNguyen",
  country: "VietNam",
  gender: "male",
};
for (let key in developer) {
  console.log(`${key}: ${developer[key]}`);
  console.log("----------------------------");
}
