const header = document.querySelector("h1");
const btn = document.querySelector("#btn");

function changeText() {
  header.textContent = "Neer";
}

btn.addEventListener("click", changeText);

btn.addEventListener("mouseover", () => {
  header.style.backgroundColor = "green";
});

btn.addEventListener("mouseout", () => {
  header.style.backgroundColor = "white";
});

const input = document.querySelector("#inp");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

const form = document.querySelector("#form");
const username = document.querySelector("#username");

form.addEventListener("submit", (event) => {
  console.log(event.target);
  console.log(event.type);
  event.preventDefault();

  output.textContent = username.value;
});

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (event) => {
  console.log("Child clicked");
    event.stopPropagation();
});
