window.addEventListener("DOMContentLoaded", (e)=>{
    let aboutSec = document.getElementById("about");
    aboutSec.style.opacity = 0;
});
function handleIntersection(entries, observer) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            let root = document.getElementById("root");
            let headings = document.getElementById("ph");
            root.style.transform = "translateY(-150px)";
            headings.style.opacity = "0";
        } else {
            let root = document.getElementById("root");
            let headings = document.getElementById("ph");
            root.style.transform = "translateY(0px)";
            headings.style.opacity = "1";
        }
    });
}
function handleFade(entries, observer) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            console.log("about sec enter");
            let aboutSec = document.getElementById("about");
            aboutSec.style.opacity = 1;
            let main = document.getElementById("main");
            main.style.opacity = 0;
        } else {
            let aboutSec = document.getElementById("about");
            aboutSec.style.opacity = 0;
        }
    });
}
function handleMainFade(entries, observer) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            let main = document.getElementById("main");
            main.style.opacity = 1;
            let aboutSec = document.getElementById("about");
            aboutSec.style.opacity = 0;
        } else {
            let main = document.getElementById("main");
            main.style.opacity = 0;
        }
    });
}
function handleAll(entries, observer) {
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            let main = document.getElementById("main");
            let aboutSec = document.getElementById("about");
            main.style.opacity = 0;
            aboutSec.style.opacity = 0;
        } else {
            let aboutSec = document.getElementById("about");
            aboutSec.style.opacity = 1;
        }
    });
}
// Create an IntersectionObserver
const observer = new IntersectionObserver(handleIntersection);
const fade1 = new IntersectionObserver(handleFade);
const fadeMain = new IntersectionObserver(handleMainFade);
const fadeAll = new IntersectionObserver(handleAll);
const targetElement = document.querySelector(".contact-me");
const aboutSecTrigger = document.getElementById("ht-about-me");
const mainTrigger = document.getElementById("ht-main");
const proj = document.getElementById("ph");
// Start observing the target element
observer.observe(targetElement);
fade1.observe(aboutSecTrigger);
fadeMain.observe(mainTrigger);
fadeAll.observe(proj);
const text = document.getElementById("text");
const text2 = document.getElementById("text-2");
const rotate = new CircleType(text).radius(50);
const rotate2 = new CircleType(text2).radius(50);

//# sourceMappingURL=index.0f3d23c6.js.map
