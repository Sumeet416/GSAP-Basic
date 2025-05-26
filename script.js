// gsap.to(".box1", {
//     y:400,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     borderRadius:"50%",
//     repeat:1,
//     yoyo:true
// })


// gsap.to(".box2", {
//     y:400,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     borderRadius:"50%",
//     repeat:1,
//     yoyo:true
// })

// gsap.to(".box3", {
//     y:400,
//     duration:1,
//     delay:1,
//     rotate:360,
//     scale:0.5,
//     borderRadius:"50%",
//     repeat:1,
//     yoyo:true
// })


tl = gsap.timeline()

// tl.from("#logo", {
//     y:-30,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     scale:0.5
// })

// tl.from(".nav-bar ul li", {
//     y:-20,
//     opacity:0,
//     duration:0.5,
//     delay:0.5,
//     scale:0.5,
//     stagger:0.5
// })

tl.from(".hero-section h1", {
    y:600,
    opacity:0,
    duration:1.5,
    delay:0.2,
    stagger:1,
    ease:"expo.in"
})

tl.from(".hero-section h3", {
    y:600,
    opacity:0,
    duration:2.5,
    delay:0.2,
    ease:"bounce",
    stagger:1
})
