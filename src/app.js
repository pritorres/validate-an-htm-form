/* eslint-disable */
import "bootstrap";

import "./style.css";

const myForm = document.getElementById("myFormulario");

myForm.addEventListener("submit", event => {
  event.preventDefault();
  event.stopPropagation();
  if (myForm.checkValidity() === false) {
  }
  myForm.classList.add("was-validated");
});
