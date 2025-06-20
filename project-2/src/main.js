const animation1 = document.getElementById('animation-1')
const animation2 = document.getElementById('animation-2')
const animation3 = document.getElementById('animation-3')

// Simple animation state flag
let isAnimating = false;

const breakTheText = () => {
    const h1 = document.querySelector('h1');
    const name = document.querySelector('#app h1').textContent;
    const nameSplit = name.split('')

    var clutter = ""
    console.log(nameSplit)

    var halfvalue = Math.floor(nameSplit.length/2)

    nameSplit.forEach(function(e,idx){
        if(idx<halfvalue){
            clutter += `<span class="a">${e}</span>`
        } else {
            clutter += `<span class="b">${e}</span>`
        }
    })

    h1.innerHTML = clutter
}

breakTheText()

animation1.addEventListener('click', () => {
    // Check if any animation is running
    if (isAnimating) {
        console.log('Animation 1 blocked - another animation is running');
        return;
    }
    
    isAnimating = true;
    console.log('Starting Animation 1');
    
    gsap.from('h1 span', {
        y: 100,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
        onComplete: () => {
            isAnimating = false;
            console.log('Animation 1 completed');
        }
    })
})

animation2.addEventListener('click', () => {
    // Check if any animation is running
    if (isAnimating) {
        console.log('Animation 2 blocked - another animation is running');
        return;
    }
    
    isAnimating = true;
    console.log('Starting Animation 2');
    
    // Create a timeline for animation 2
    const tl = gsap.timeline({
        onComplete: () => {
            isAnimating = false;
            console.log('Animation 2 completed');
        }
    });
    
    tl.from('h1 .a', {
        y: 100,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
    })
    .from('h1 .b', {
        y: 100,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: -0.15,
    },0) // Start 0.5 seconds after the timeline begins
})

animation3.addEventListener('click', () => {
    // Check if any animation is running
    if (isAnimating) {
        console.log('Animation 3 blocked - another animation is running');
        return;
    }
    
    isAnimating = true;
    console.log('Starting Animation 3');
    
    gsap.from('h1 span', {
        y: 100,
        duration: 0.8,
        delay: 0.5,
        opacity: 0,
        stagger: -0.15,
        onComplete: () => {
            isAnimating = false;
            console.log('Animation 3 completed');
        }
    })
})