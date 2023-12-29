// selecting all the buttons and the body
/* This code is written in JavaScript and it is used to select all the buttons with the class "button"
and the body element of the HTML document. */
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

/* This code is adding a click event listener to each button in the `buttons` array. When a button is
clicked, the code checks the `id` of the clicked button using `e.target.id`. If the `id` matches one
of the specified colors ("grey", "white", "blue", "yellow"), it sets the background color of the
`body` element to the corresponding color. */
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // e.target.id -> value aah kaha se raha hai
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
