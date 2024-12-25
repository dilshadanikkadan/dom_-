const one_btn = document.querySelector(".one-btn");
const two_btn = document.querySelector(".two-btn");
const three_btn = document.querySelector(".three-btn");
const one_section = document.querySelector(".one");
const two_section = document.querySelector(".two");
const three_section = document.querySelector(".three");

function scrollAction(el, targetEl) {
  el.addEventListener("click", (e) => {
    const position_calc = targetEl.getBoundingClientRect();

    /* 
        actually we need to window.pageYoffset as well otther wise it will not take
        the top of document when we click the button in the middle of the scorll
    */
    window.scroll({
      left: position_calc.left,
      top: position_calc.top + window.pageYOffset,
      behavior: "smooth",
    });
  });
}   

scrollAction(one_btn, two_section);
scrollAction(two_btn, three_section);
scrollAction(three_btn, one_section);
