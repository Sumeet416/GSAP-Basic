const animation1 = document.getElementById('animation-1')
const animation2 = document.getElementById('animation-2')
const animation3 = document.getElementById('animation-3')

const breakTheText = () => {const h1 = document.querySelector('h1');
const name = document.querySelector('#app h1').textContent;
const nameSplit = name.split('')

var clutter = ""
console.log(nameSplit)

var halfvalue = Math.floor(nameSplit.length/2)

nameSplit.forEach(function(e,idx){
  // clutter += `<span class="a">${e}</span>`

  if(idx<halfvalue){
    clutter += `<span class="a">${e}</span>`
  } else {
    clutter += `<span class="b">${e}</span>`
  }
})

h1.innerHTML = clutter
}

breakTheText()



animation1.addEventListener('click', ()=> {
    gsap.from('h1 span',{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15, 
  })
})

animation2.addEventListener('click', ()=> {
  gsap.from('h1 .a',{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:0.15,
  })

  gsap.from('h1 .b',{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15,
  })
})

animation3.addEventListener('click', ()=> {
    gsap.from('h1 span',{
    y:100,
    duration:0.8,
    delay:0.5,
    opacity:0,
    stagger:-0.15, 
  })
})