const menu = document.querySelector('#nav i');
const cross = document.querySelector('#full i');

var tl = gsap.timeline({paused:true});

tl.to('#full', {
  right: 0,
  duration: 0.5,
})

tl.from("#full h4",{
  x:150,
  duration: 0.5,
  stagger:0.28,
  opacity:0,
})

tl.from('#full i',{
  opacity:0,
  duration:0.2,
})




menu.addEventListener('click', ()=> {
  tl.play()
})

cross.addEventListener('click',()=>{
  tl.reverse()
})