const main_ground = document.querySelector(".players");

const main_ground_position_calc = main_ground.getClientRects();

const all_players = main_ground.children;

window.onload = function () {
  updateDom();
};


function updateDom() {
  for (const el of all_players) {
    const stored_style = JSON.parse(localStorage.getItem(el.id));
    el.style.left = stored_style.left;
    el.style.top = stored_style.top;
    el.classList.remove("dragEnter");
    el.classList.remove("target-el-drag-effect");
  }
}


let current_dragging_el;
let target_dragging_el;


main_ground.setAttribute("ondrop", "onDrop(event)");
main_ground.setAttribute("ondragover", "onDragOver(event)");
main_ground.setAttribute("ondragenter", "onDragEnter(event)");


for (const el of main_ground.children) {
  el.setAttribute("draggable", "true");
  el.addEventListener("dragstart", onDrag);
}

function onDrag(e) {
  current_dragging_el = e.target;
  current_dragging_el.classList.add("target-el-drag-effect");
}

function onDragOver(e) {
  e.preventDefault();
}

function onDrop(e) {
  e.preventDefault();
  const mouseX = e.pageX - main_ground.offsetLeft;
  const mouseY = e.pageY - main_ground.offsetTop;

  const store_to_local = {
    id: current_dragging_el?.id,
    left: mouseX - current_dragging_el.offsetWidth / 2 + "px",
    top: mouseY - current_dragging_el.offsetHeight / 2 + "px",
  };
  if (target_dragging_el.classList.contains("player")) {
    const target_el_position = localStorage.getItem(target_dragging_el.id);
    const dragging_el_position = localStorage.getItem(current_dragging_el.id);
    localStorage.setItem(target_dragging_el.id, dragging_el_position);
    localStorage.setItem(current_dragging_el.id, target_el_position);
  } else {
    localStorage.setItem(
      current_dragging_el.id,
      JSON.stringify(store_to_local)
    );
  }
  updateDom();
}

function onDragEnter(e) {
  if (e.target.tagName === "IMG") {
    target_dragging_el = e.target.parentElement;
  } else {
    target_dragging_el = e.target;
  }
  if (target_dragging_el.classList.contains("player"))
    target_dragging_el.classList.add("dragEnter");
  console.log(target_dragging_el);
}
