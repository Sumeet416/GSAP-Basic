tl = gsap.timeline()
tl.from("#logo",{
    opacity:0,
    y:-30,
    duration:0.5,
    delay:0.4,
    scale:0.5,
    ease:"bounce.out"
})

tl.from("#hello h1",{
    x:1600,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#hello",
        scroller:"body",
        markers: true,
        scrub: 2,
        pin: true
    }
})

tl.from(".nav-bar ul li", {
    opacity:0,
    y:-30,
    duration:1,
    delay:0.25,
    scale:0.5,
    ease:"bounce.out",
    stagger:0.5
})

tl.from("#page1",{
    opacity:0,
    // scale:0.5,
    duration:1,
    ease: "power1.out",
    x:1600
})

tl.to("#page1 .box1",{
    scale:0.5,
    duration:2.5,
    delay:1,
    borderRadius:"50%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        scrub:2,
        end:"top -100%",
        start:"top 0%",
        pin:true
    }

})

tl.to("#page2 h1",{
    transform: "translateX(-100%)",
    delay:1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -90%",
        scrub: 2,
        pin:true
    }
})