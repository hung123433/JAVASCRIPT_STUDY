//Contructor Function (Hàm khởi tạo - hàm tạo):Sử dụng để tạo đối tượng mới. Thường được kết hợp với từ khoá new.

function developer(username) {
  this.name = username;
  this.greet = function () {
    console.log(`Xin chao ! Toi la:${this.name} ! Toi la Coder Benginer`);
  };
}

const developerHi = new developer("Hung Nguyen");
developerHi.greet();
