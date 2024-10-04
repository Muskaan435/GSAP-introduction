var tl = gsap.timeline()

tl.from("#nav h3",{
    y: -50,
    opacity:0,
    delay: 0.4,
    duration: 0.8,
    stagger:0.5
})
tl.from("#main h1",{
    x:-500,
    duration:0.8,
    scale:0.3,
    opacity:0,
    stagger:0.3,
})
tl.from("img",{
    x:100,
    rotate:45,
    duration:0.5,
    opacity:0,
    stagger:0.4
})