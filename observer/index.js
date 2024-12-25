const el_group = document.querySelectorAll(".container");

const callBack = (entries,observer) => {
  const [entry] = entries;
  const position = entry.target.getBoundingClientRect();

  if (entry.isIntersecting) {
     entry.target.classList.remove("container-hidden");
     observer.unobserve(entry.target)
  } else {
    console.log(position.top,window.pageYOffset);
    
     entry.target.classList.add("container-hidden");
  }
};
const observer = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0.3,
});
el_group.forEach((el) => {
  el.classList.add("container-hidden");
  observer.observe(el);
});
