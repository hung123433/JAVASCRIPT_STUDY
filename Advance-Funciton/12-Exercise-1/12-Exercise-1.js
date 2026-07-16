//12a
const add = function () {
  console.log(2 + 3);
};

add();
add();

//12b
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () {
  console.log("12b");
});
runTwice(add);

//12c

const pickButton = () => {
  const button = document.querySelector(".js-button");

  setTimeout(function () {
    button.innerHTML = "Finished";
  }, 1000);
  button.innerHTML = "Loading...";
};

const buttonElement = document.querySelector(".select-button");
buttonElement.addEventListener("click", pickButton);
//12f
const pickAdd = () => {
  let timeOutMessenger;
  const messengerElement = document.querySelector(".js-display-add");
  messengerElement.innerHTML = "Added";

  clearTimeout(timeOutMessenger);

  timeOutMessenger = setTimeout(function () {
    messengerElement.innerHTML = "";
  }, 2000);
};

const addButtonElement = document.querySelector(".add-button");
addButtonElement.addEventListener("click", pickAdd);

//12g
/*
setInterval(function () {
  if (document.title === "Lesson 12 Exercise 1") {
    document.title = `(2) Messenger`;
  } else {
    document.title = "Lesson 12 Exercise 1";
  }
}, 1000);
*/

//12h - 12i
let messenger = 0;
const addMessenger = () => {
  if (document.title === "Lesson 12 Exercise 1") {
    messenger++;
    document.title = `(${messenger}) Messenger`;
  } else {
    messenger++;
    document.title = `(${messenger}) Messenger`;
  }
};

const removeMessenger = () => {
  if (messenger === 1) {
    document.title = "Lesson 12 Exercise 1";
  } else if (messenger > 1) {
    messenger--;
    document.title = `(${messenger}) Messenger`;
  }
};

const addMessengerElement = document.querySelector(".add-messenger");
addMessengerElement.addEventListener("click", addMessenger);

const removeMessengerElement = document.querySelector(".remove-messenger");
removeMessengerElement.addEventListener("click", removeMessenger);
