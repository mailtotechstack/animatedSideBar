const tl = gsap.timeline();
const sideBar = document.querySelector("#full");
const cross = document.querySelector("#full i");
const menu = document.querySelector("#nav i");

(()=>{
    tl.to(sideBar, {
        right: 0
    });
    tl.from("#full h4", {
        x: 150,
        stagger: 0.2,
        opacity: 0
    });
    tl.from(cross, {
        opacity: 0,
        rotate: 50
    });
})();

tl.pause();

menu.addEventListener("click", ()=>{
    tl.play();
});

cross.addEventListener("click", ()=>{
    tl.reverse();
});