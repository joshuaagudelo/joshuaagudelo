var gif = document.querySelector("#gif");
const btnYes = document.querySelectorAll(".btn-yes");
const btnNo = document.querySelector("#btn-no");
const dudu = document.querySelector("#dudu");

const handleClick = () => {
  gif.style.display = "block";
  dudu.src = "/public/cutecat.gif";
};

const handleNo = () => {
  btnNo.style.transform = "scale(0.5)";
  setTimeout(() => {
    btnNo.style.transform = "scale(0.1)";
  }, 1500);
  setTimeout(() => {
    btnNo.style.transform = "scale(0)";
  }, 2500);

  gif.style.display = "none";
  dudu.src = "/public/angry cat.gif";
  setTimeout(() => {
    dudu.src = "/public/dudu.gif";
  }, 4000);
};
