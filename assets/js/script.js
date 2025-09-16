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

const createUsers = function (inputVlaue) {
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
    "align-items-center"
  );
  const avatarPl = document.createElement("i");
  avatarPl.classList.add("bi", "bi-person-square");

  const userName = document.createElement("h2");
  userName.innerText = inputVlaue;

  userCard.appendChild(avatarPl);
  userCard.appendChild(userName);
  col.appendChild(userCard);
  userCardCont.appendChild(col);
};

buttonSave.onclick = function () {
  const input = userInput.value;

  users.push(input);

  console.log(users);
  localStorage.setItem("users", JSON.stringify(users));
  userInput.value = "";
  createUsers(input);
};

buttonRemove.onclick = function () {
  users = [];

  console.log(users);

  localStorage.clear("users");

  userCardCont.remove("col");
};

// Exercise 2
