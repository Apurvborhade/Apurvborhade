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
  

  let tweenanim;
  
  if(window.screen.width > 800) {
    // SERVICE LANDING HORIZONTAL SCROLL
    tweenanim = gsap.to("#services", {
      scrollTrigger : {
          trigger: "#services",
          markers:false,
          start: "top top",
          end:"+=4000px",
          pin:true,
          markers:false,
          scrub:true
      },
      xPercent: -200,
      ease: "none",
      delay:2
    })
  
  gsap.to("body",{
    scrollTrigger: {
      containerAnimation:tweenanim,
      trigger:".services-body",
      start:"left center",
      markers:true,
      toggleActions:"play none none reverse"
    },
    backgroundColor:"#fff",
    color:"#000"
  })
  gsap.to(".service-image-wrapper",{
    scrollTrigger:{
      containerAnimation:tweenanim,
      trigger:".service-image-wrapper",
      start:"300px center",
      toggleActions:"play none none reverse"
    },
    className:"service-image-wrapper-full",
    ease:"none",
  })
  }






//   GSAP
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({});


  // TEXT REVEAL ANIM
  gsap.from(".service-cta-text-wrapper",{
    scrollTrigger : {
      trigger:".brand-desc",
      start:"top top",
      markers:true,
      scrub:true,
      end:"=+400px"
    },
    opacity:0,
    y:150,
    duration:1,
  })
  
  
  
