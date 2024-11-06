// YOUR CODE HERE
const button = document.querySelector("#btn1");

const output = document.querySelector("#output1");

button.addEventListener("click", function () {
  output.style.color = "red";
});

const button2 = document.querySelector("#btn2");

const output2 = document.querySelector("#output2");

button2.addEventListener("click", function () {
  const newSpan = document.createElement("span");
  newSpan.textContent = "Hello world";
  output2.appendChild(newSpan);
});

const button3 = document.querySelector("#btn3");

const output3 = document.querySelector("#output3 p");

button3.addEventListener("click", function () {
  output3.classList.remove("small-text");
});

const button4 = document.querySelector("#btn4");

const output4 = document.querySelectorAll("#output4 p");

button4.addEventListener("click", function () {
  output4.forEach(function (p) {
    p.style.color = "red";
  });
});

const button5 = document.querySelector("#btn5");

const inputValue = document.querySelector("#message");

button5.addEventListener("click", function () {
  const inputField = inputValue.value;
  console.log(inputField);
});
