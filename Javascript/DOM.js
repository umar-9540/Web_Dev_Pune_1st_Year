console.log("Hello from js");

// document.getElementsByTagName("h1"); // selects all h1
// document.getElementsByClassName("paragraph"); // all elements having same class paragraph
// document.getElementById("para"); // selects single element

// const header = document.querySelector("h1"); // first H1 it gets
// header.textContent = "Harshita";

// const headers = document.getElementsByTagName("h1");
// console.log(headers);
// headers[1].textContent = "Warle";

// document.querySelector("h1");
// document.querySelector(".paragraph");
// document.querySelector("#para");
// document.querySelectorAll("h1");

const heading = document.querySelector("h1");

function changeText() {
  heading.textContent = "Harshita";
  // heading.innerHTML = "<b>Harshita</b>";
  // heading.style.backgroundColor = "green";
  // heading.style.fontSize = "50px";
  heading.classList.add("active");
  // heading.classList.remove("active");
}

const para = document.querySelector("#para");

function changePara() {
  console.log(para.classList.contains("active")); // true or false
  para.classList.toggle("active");
}

// const img = document.querySelector("#photo");
// img.setAttribute("src", "new.jpg");
// img.removeAttribute("alt");
// console.log(img.getAttribute("src"));

const ul = document.querySelector("#list");

function addItems() {
    const li = document.createElement("li");
    li.textContent = "Mango";
    ul.appendChild(li);

    // ul.remove();
}

console.log(ul.children);
console.log(ul.parentElement);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
console.log(ul.nextElementSibling);