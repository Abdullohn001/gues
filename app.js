commonNumberEl = document.getElementById("commonNumber"),
  inputEl = document.getElementById("input"),
  checkEl = document.getElementById("check"),
  atempEl = document.getElementById("atemp"),
  keyNumberEl = document.getElementById("keyNumber"),
  wrapperEl = document.getElementById("wrapper"),
  recordEl = document.getElementById("record");

let rendomNumber = Math.floor(Math.random() * 20) + 1;
let attamps = 15;
let record = 0;
let checkNumber = () => {
  let inputVal = inputEl.value;
  if (inputVal == rendomNumber) {
    keyNumberEl.textContent = "You are Winer! ";
    commonNumberEl.textContent = rendomNumber;
    inputEl.disabled = true;
    commonNumberEl.classList.add("bg-green-300");
    wrapperEl.classList.add("bg-green-200");
    checkEl.disabled = true;
    if (record < attamps) {
      record = attamps;
      recordEl.textContent = attamps;
    }
  } else if (inputVal < rendomNumber) {
    keyNumberEl.textContent = "Too low.";
    attamps--;
    atempEl.textContent = attamps;
  } else if (inputVal > rendomNumber) {
    keyNumberEl.textContent = "Too high.";
    attamps--;
    atempEl.textContent = attamps;
  }
  if (attamps == 0) {
    keyNumberEl.textContent = "You are loser.😒";
    commonNumberEl.classList.add("bg-red-300");
    wrapperEl.classList.add("bg-red-200");
    checkEl.disabled = true;
    commonNumberEl.textContent = rendomNumber;
  }
  inputEl.value = "";
};

const refresh = () => {
  let newRendomNumber = Math.floor(Math.random() * 20) + 1;
  rendomNumber = newRendomNumber;
  commonNumberEl.textContent = "?";
  inputEl.value = "";
  attamps = 15;
  atempEl.textContent = attamps;
  keyNumberEl.textContent = "Start game : )";
  wrapperEl.classList.remove("bg-green-200");
  commonNumberEl.classList.remove("bg-green-300");
  commonNumberEl.classList.remove("bg-red-300");
  wrapperEl.classList.remove("bg-red-200");
  inputEl.disabled = false;
  checkEl.disabled = false;
};

//EVENTS
checkEl.addEventListener("click", checkNumber);
againEl.addEventListener("click", refresh);
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (attamps == 0) {
      e.keyCode.disabled = true;
    }
    checkNumber();
  }
});
