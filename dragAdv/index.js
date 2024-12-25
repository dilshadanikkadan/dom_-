const list_items = document.querySelector(".list");
const all_col = document.querySelectorAll(".container > div");
let current_dragging_el;
let current_dragging_el_parent;
let entredClasses = [];

for (let col of all_col) {
  col.setAttribute("ondragover", "onDragOver(event)");
  col.setAttribute("ondrop", "onDrop(event)");
  col.setAttribute("ondragenter", "onDragEnter(event)");
}

const items = document.querySelectorAll(".item");
for (let item of items) {
  item.setAttribute("draggable", "true");
  item.addEventListener("dragstart", onDrag);
}

function onDrag(e) {
  current_dragging_el = e.target;
  current_dragging_el_parent = current_dragging_el.parentElement;
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  e.preventDefault();

  e.target.classList.contains("item") ?
  current_dragging_el_parent.prepend(current_dragging_el)
  :
  e.target.children[1].appendChild(current_dragging_el)

  entredClasses.forEach((el) => {
    el.classList.remove("onDragEnter");
  });
  entredClasses = [];
}
function onDragEnter(e) {
  let idx = 0;
  if (
    e.target.classList.contains("second-col") ||
    e.target.classList.contains("first-col")
  ) {
    if (!idx) {
      entredClasses.push(e.target);
      e.target.classList.add("onDragEnter");
    }
    idx++;
  }
}
