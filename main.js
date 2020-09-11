document.body.style.backgroundColor = "white";
document.body.innerHTML = `
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div class="theBox"></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>`;

var boxselector = document.querySelector(".theBox");
boxselector.style.backgroundColor = "orange";
boxselector.addEventListener("click", () => displayData());

var thebox = document.querySelector(".theBox").getBoundingClientRect();
var domRect = thebox;
var clientX = thebox.left;
var clientY = thebox.top;
var pageX = thebox.right;
var pageY = thebox.bottom;

function displayData() {
  console.log(domRect);
  console.log(`client: ${clientX}, ${clientY}`);
  console.log(`page: ${pageX}, ${pageY}`);
}
displayData();
