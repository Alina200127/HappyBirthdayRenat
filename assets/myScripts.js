// slider
const slides = document.querySelectorAll(".slide");
slides.forEach((elem) => {
   elem.onclick = () => {
      // находим слайд у которого есть класс active, удаляем класс
      document.querySelector(".slide.active")?.classList.remove("active");
      // а у слайда на который кликнули добавляем класс
      elem.classList.add("active");
   };
});

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      } else {
         change.target.classList.remove("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".second-screen__text");

for (let elm of elements) {
   observer.observe(elm);
}
