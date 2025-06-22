gsap.to(".marque",{
  transform:'translateX(-100%)',
  ease:"none",
  duration: 2,
  repeat: -1,

})



window.addEventListener('wheel',(dets)=>{
  if(dets.deltaY>0){
    gsap.to(".marque",{
      transform:'translateX(-100%)',
      ease:"none",
      duration: 4,
      repeat: -1,
    })

    gsap.to('.marque img',{
      rotate:180,
    })
  } else {
    gsap.to(".marque",{
      transform:'translateX(0%)',
      ease:"none",
      duration: 4,
      repeat: -1,
    })
        gsap.to('.marque img',{
      rotate:0,
    })
  }
})