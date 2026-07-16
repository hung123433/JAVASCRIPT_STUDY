/** Ví dụ về sự khác nhau giữa primitive-types và reference-types */
//primitive-types
let username = "HungNguyen";
let usernameCopy = username;
usernameCopy = "HungNguyen is CoderBeginer";
console.log("username: ", username);
console.log("usernameCopy: ", usernameCopy);
console.log("---------------------------");
//reference-types
let objectA = {
  username: "HungNguyen",
};
let objectB = objectA;
objectB.username = "HungNguyen is CoderBeginer";
console.log("ObjectA: ", objectA);
console.log("ObjectB: ", objectB);
