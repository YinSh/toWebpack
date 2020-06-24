import pic from "./jp.png";
import style from "./index.scss";
import createPic from "./createPic";

const img = new Image();
img.src = pic;
img.classList.add(style.pic);

const root = document.getElementById("root");
root.append(img);

createPic();
