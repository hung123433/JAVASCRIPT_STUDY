//Method function: Là hàm khởi tạo trong một đối tượng, được coi là một phương thức của đối tượng

let developer = {
  name: "Nguyen Van Hung",
  age: 18,
  greet: function () {
    console.log(`Xin chao ! Toi la:${this.name} ! Toi la Coder Benginer`);
  },
};
console.log(developer.name);
