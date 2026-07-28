let scrollRevealOption = {
    distance: "15px",
    duration: 500,
};
ScrollReveal().reveal("header", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal("header", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".CodingIllustration", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".CodingIllustration", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".textConta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".textConta", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".apigrid", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".apigrid", {
    ...scrollRevealOption,
    delay: 700,
});

let body = document.querySelector("body");
let toggle = document.querySelector(".toggle");
let idx = 0;
toggle.addEventListener("click",()=>{
if(idx === 0){
idx = 1;
body.classList.add("bg-black");
}else{
idx = 0;
body.classList.remove("bg-black");
}
});