gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".div-2",
        start: "top top",
        end: () => "+=" + document.querySelector(".div-2").offsetHeight * 3,
        scrub: 1,
        pin: true
    }
});

tl.from(".square", { xPercent: -100, duration: 2 })
    .from(".square-2", { xPercent: 100, duration: 2 })
    .from(".square-3", { yPercent: -100, duration: 2 });



gsap.to(".create", { y: "0%", duration: 1.3});

// gsap.from(".square", {
//     xPercent: -100,
//     duration: 3,
// })

// gsap.from(".square-2", {
//     xPercent: 100,
//     duration: 3,
//     delay: 3
// })

// gsap.from(".square-3", {
//     yPercent: -100,
//     duration: 3,
//     delay: 6
// })