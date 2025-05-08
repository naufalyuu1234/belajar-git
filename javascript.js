// dark mode
const toggleSwitch = document.getElementById("dark-mode-toggle");
const body = document.body;

// cek referensi user dari local storage
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
  toggleSwitch.checked = true;
}

// event listener untuk toggle switch
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  }
});
