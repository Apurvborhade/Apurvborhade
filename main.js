const lenis = new Lenis({
    duration: 2.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical', // vertical, horizontal
    gestureDirection: 'vertical', // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })
  
  //get scroll value
  lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
  








//   GSAP
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({});

  gsap.to("#services", {
    scrollTrigger : {
        trigger: "#services",
        markers:true,
        start: "top top",
        end:"+=2000px",
        pin:true,
        markers:false,
        scrub:true
    },
    xPercent: -100,
    ease: "sine.inOut",
  });