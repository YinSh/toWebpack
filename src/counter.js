function counter() {
  const counterDiv = document.createElement("div");
  counterDiv.innerHTML = 1;
  document.body.appendChild(counterDiv);
  counterDiv.onclick = function () {
    counterDiv.innerHTML = parseInt(counterDiv.innerHTML, 10) + 1;
  };
}

export default counter;
