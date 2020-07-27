let a_days = document.getElementById("5_days");
let b_days = document.getElementById("7_days");
let c_days = document.getElementById("10_days");
let five_days = document.getElementById("five_days");
let seven_days = document.getElementById("seven_days");
let ten_days = document.getElementById("ten_days");

a_days.addEventListener("click", () => {
    seven_days.style.display = "none";
    ten_days.style.display = "none";
    five_days.style.display = "flex";
})

b_days.addEventListener("click", () => {
    five_days.style.display = "none";
    ten_days.style.display = "none";
    seven_days.style.display = "flex";

})

c_days.addEventListener("click", () => {
    seven_days.style.display = "none";
    five_days.style.display = "none";
    ten_days.style.display = "flex";
})


