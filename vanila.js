let scrollRevealOption = {
    distance: "15px",
    duration: 600,
};
ScrollReveal().reveal("header", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".header", {
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".feature", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".feature", {
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".mainGrid", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".mainGrid", {
    ...scrollRevealOption,
    delay: 600,
});
let linkstab = document.querySelector(".linkstab");
let body = document.querySelector("body");
let toggle = document.querySelector(".toggle");
let showCaseText = document.querySelector(".showCaseText");
let iconns = document.querySelector(".iconns");
let idx = 0;
toggle.addEventListener("click",()=>{
if(idx === 0){
idx = 1;
body.classList.add("bg-black");
showCaseText.style.color = "white";
linkstab.style.color = "white";
iconns.style.color = "white";
}else{
idx = 0;
body.classList.remove("bg-black");
showCaseText.style.color = "black";
linkstab.style.color = "black";
iconns.style.color = "black";
}
});
let seeBtn = document.querySelector(".seeBtn");
let conta = document.querySelector(".conta");
seeBtn.addEventListener("click",()=>{
conta.classList.toggle("hidden");
});
