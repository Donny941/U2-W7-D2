// Exercise 1
const userInput = document.querySelector(".form-control");
const buttonSave = document.querySelector(".btn-success");
const buttonRemove = document.querySelector(".btn-danger");
const userCardCont = document.getElementById("userList");

// console.log(userCardCont);
// console.log(userInput);
// console.log(buttonSave);
// console.log(buttonRemove);

let users = [];

class User {
  constructor(name) {
    this.uName = name;
  }
}

const createUsers = function (inputValue) {
  const col = document.createElement("div");
  col.className = "col";
  const userCard = document.createElement("div");
  userCard.classList.add(
    "border",
    "border-primary",
    "p-4",
    "rounded",
    "shadow-lg",
    "d-flex",
    "gap-2",
    "align-items-center",
    "justify-content-between"
  );
  const avatarPl = document.createElement("i");
  avatarPl.classList.add("bi", "bi-person-square");

  const userName = document.createElement("h2");
  userName.innerText = inputValue;

  const deleteUser = document.createElement("button");
  deleteUser.classList.add("btn", "btn-danger");
  deleteUser.id = "deleteUser";
  deleteUser.innerText = "Remove";

  deleteUser.onclick = function (event) {
    event.target.closest(".col").remove();
    const userIndex = users.findIndex((user) => user.uName === inputValue);
    console.log(userIndex);
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      if (users.length === 0) {
        localStorage.removeItem("users");
      } else {
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  userCard.appendChild(avatarPl);
  userCard.appendChild(userName);
  userCard.appendChild(deleteUser);
  col.appendChild(userCard);
  userCardCont.appendChild(col);
};

buttonSave.onclick = function () {
  const input = userInput.value;
  if (input === "") {
    return;
  }
  const user = new User(input);
  const userObj = user.uName;
  console.log(userObj);

  users.push(user);

  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
  userInput.value = "";
  createUsers(userObj);
};

buttonRemove.onclick = function () {
  users = [];

  console.log(users);

  localStorage.clear("users");

  userCardCont.remove("col");
};

window.addEventListener("DOMContentLoaded", () => {
  const existingUser = localStorage.getItem("users");
  if (existingUser) {
    const userArray = JSON.parse(existingUser);
    users = userArray;
    userArray.forEach((user) => {
      createUsers(user.uName);
    });
  }
});

// Exercise 2

const counterTab = document.getElementById("counter");
// console.log(counterTab);
const countText = counterTab.querySelector("h2");
// console.log(countText);

let count = 0;

setInterval(function () {
  let saved = sessionStorage.getItem("savedCount");
  if (saved) {
    count = saved;
  }
  count++;
  countText.innerText = count;
  sessionStorage.setItem("savedCount", count);
}, 1000);
