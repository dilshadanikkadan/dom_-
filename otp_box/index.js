const input_group = document.querySelector(".inputGroup");
const submit_btn =  document.querySelector(".submit-btn");

window.onload = function (e) {

  // we can get first child el of input group;

  input_group.firstElementChild.focus();
};

for (const [index, el] of Object.entries(input_group.children)) {
  el.addEventListener("input", (e) => {
    el.value = el.value.slice(0,1)
    if(el.value.length === 1){
        Number(index) !== input_group.children.length - 1 && el.nextElementSibling.focus();
    }
  });
  el.addEventListener('keydown',(e)=>{
    setTimeout(() => {
        if(e.key === 'Backspace'){
            Number(index) !== 0 && el.previousElementSibling.focus()
        }
    }, 0);
  })
}

submit_btn.addEventListener('click',(e)=>{
    const res = [];
    for(let el of input_group.children){
       res.push(el.value)
    }
    console.log(Number(res.join('')));
    console.log(input_group.children);
})