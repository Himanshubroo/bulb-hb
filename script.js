
// On & Off button

let bulbColor = document.querySelector(".bulb");
let button = document.querySelector("#toggleButton");
let flag = 1;

button.addEventListener("click", () => {
    if (flag == 1) {
        bulbColor.style.backgroundColor = "#ffeb3b";
        button.textContent = "Turn off";
        flag = 0;
    }
    else if (flag == 0) {
        bulbColor.style.backgroundColor = "#000";
        button.textContent = "Turn On";
        flag = 1;
    }
});


