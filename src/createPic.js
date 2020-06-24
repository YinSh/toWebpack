import pic from "./jp.png";

function createPic() {
  const img = new Image();
  img.src = pic;
  img.classList.add("pic");

  const root = document.getElementById("root");
  root.append(img);
}

export default createPic;
