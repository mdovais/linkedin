const headerLogoBorders = document.getElementsByClassName("head2-img");
let prevClickedElement = null;

for (let i = 0; i < headerLogoBorders.length; i++) {
  headerLogoBorders[i].addEventListener("click", function () {
    if (prevClickedElement !== null) {
      prevClickedElement.style.borderBottom = "none";
    }
    this.style.borderBottom = "2px solid black";
    prevClickedElement = this;
  });
}

const imgNew = document.getElementById("img15");
const imgOld = document.getElementById("img11");

imgOld.addEventListener("click", function () {
  imgNew.style.display = "flex";
  this.remove();
});

const imgOld2 = document.getElementById("img19");
const imgNew2 = document.getElementById("img17");

imgOld2.addEventListener("click", function () {
  imgNew2.style.display = "flex";
  this.remove();
});

const comBtn = document.getElementById("img14");
const input = document.getElementById("input-field4");

comBtn.addEventListener("click", function () {
  input.focus();
});

const newP = document.getElementById("p1");
const oldP = document.getElementById("p2");

oldP.addEventListener("click", function () {
  newP.style.display = "flex";
  this.remove();
});
