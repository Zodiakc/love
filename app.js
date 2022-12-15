const heart = document.querySelector(".heart")
const text = document.querySelector(".none")

heart.addEventListener("click", show)
function show(){
  text.classList.add("typewriter")
  text.classList.remove("none")
  heart.classList.add("none")
}
