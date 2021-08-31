/* eslint-disable */
import "bootstrap";
import "./style.css";

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};

const myForm = document.getElementById("myFormulario");
myForm.addEventListener("submit", evento => {
  evento.preventDefault();
  console.log("sasa");
  let cardNro = document.querySelector("#CardNro");
  let cardNroError = document.querySelector("#CardNro");

  console.log(cardNro.value);
  if (cardNro.value === "") {
    cardNroError.innerHTML = "CardNro is required";
  }
});
