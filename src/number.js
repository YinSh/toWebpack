function number() {
  const numberDiv = document.createElement("div");
  numberDiv.setAttribute("id", "number");
  numberDiv.innerHTML = 2000;
  document.body.appendChild(numberDiv);
}

export default number;
