const $input = document.querySelector("#input");
const $list = document.querySelector("#list");

const state = {
  inputTask: ""
};

const addProduct = () => {
  if (state.inputTask !== "") {
    const newLi = document.createElement("li");
    newLi.innerHTML = `
    <input type="checkbox"/>
    <label>${state.inputTask}</label>
    `;
    $list.appendChild(newLi);
    $input.value = "";
    state.inputTask = "";
  }
};

$input.addEventListener("input", (event) => {
  state.inputTask = event.target.value;
});

$input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addProduct();
  }
});