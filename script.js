// Part 1: Trigger CSS animation via class toggle
document.getElementById("animateBtn").addEventListener("click", () => {
  const box = document.getElementById("animatedBox");
  box.classList.toggle("active");
});

// Part 2: Function with parameters and return value
function add(a, b) {
  return a + b;
}

function showSum(x, y) {
  const result = add(x, y);
  document.getElementById("sumResult").textContent = `Sum: ${result}`;
}

// Part 2: Scope demonstration
let globalMessage = "Accessible globally";

function scopeDemo() {
  let localMessage = "Accessible only inside this function";
  console.log(globalMessage);
  console.log(localMessage);
}

scopeDemo();

// Part 3: Modal animation control
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
