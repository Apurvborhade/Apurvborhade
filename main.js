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
  // console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//   GSAP
gsap.registerPlugin(ScrollTrigger);

let tweenanim;

if (window.screen.width > 800) {
  // SERVICE LANDING HORIZONTAL SCROLL
  tweenanim = gsap.to("#services", {
    scrollTrigger: {
      trigger: "#services",
      markers: false,
      start: "top top",
      end: "+=4000px",
      pin: true,
      markers: false,
      scrub: true
    },
    xPercent: -200,
    ease: "none",
    delay: 2
  })

  gsap.to("body", {
    scrollTrigger: {
      containerAnimation: tweenanim,
      trigger: ".services-body",
      start: "left center",
      toggleActions: "play none none reverse"
    },
    backgroundColor: "#fff",
    color: "#000"
  })


  gsap.to(".service-image-wrapper", {
    scrollTrigger: {
      containerAnimation: tweenanim,
      trigger: ".service-image-wrapper",
      start: "300px center",
      toggleActions: "play none none reverse"
    },
    className: "service-image-wrapper-full",
    ease: "none",
  })
}


if (window.screen.width < 800) {
  gsap.to("body", {
    scrollTrigger: {
      trigger: ".services-body",
      start: "top center",
      markers: true,
      toggleActions: "play none none reverse"
    },
    backgroundColor: "#fff",
    color: "#000"
  })
}

const serviceImages = document.querySelectorAll(".service-image-wrapper img");
const serviceDesc = document.querySelectorAll(".service-desc");

serviceImages.forEach((image) => {
  const overlayText = image.parentElement.parentElement.querySelector(".service-desc");
  const overlay = image.parentElement.parentElement.querySelector(".service-desc-overlay");

  gsap.to(image, {
    scrollTrigger: {
      trigger: image,

      start: "+=100px center",

    },
    css: { width: "100%" },
    duration: 1
  })
  gsap.from(overlayText, {
    scrollTrigger: {
      trigger: image,

      start: "+=100px center",

    },
    opacity: 0,
    duration: 1,
    delay: 0.4,
  })
  gsap.from(overlay, {
    scrollTrigger: {
      trigger: image,

      start: "+=100px center",

    },
    opacity: 0,
    duration: 1,
    delay: 0.7,
  })
})







// TEXT REVEAL ANIM
gsap.from(".service-cta-text-wrapper", {
  scrollTrigger: {
    trigger: ".service-section",
    start: "-=100px center",
    scrub: false,
    markers:false,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 150,
  duration: 1,
  rotation: 45, transformOrigin: "left 100%"
})
// gsap.to(".works-body-wrapper", {
//   scrollTrigger: {
//     trigger: ".works-header",
//     start: "+=50px +=100px",
//     end: "+=4000px",
//     scrub: true,
//     pin: ".works-wrapper",
//     markers: false,
//   },
//   xPercent: -100,
// })



const workImages = document.querySelectorAll(".works-images");

workImages.forEach((image) => {
  const overlayText = image.parentElement.parentElement.querySelector(".service-desc");
  const overlay = image.parentElement.parentElement.querySelector(".service-desc-overlay");
  const Imagecontainer = image.parentElement

  gsap.to(Imagecontainer, {
    scrollTrigger: {
      trigger: ".works-body-wrapper",
      start: "top center",
      markers: false,
    },
    className: ".work-media-wrapper-active",
    duration: 1
  })
  gsap.to(image, {
    scrollTrigger: {
      trigger: ".works-body-wrapper",

      start: "top center",

    },
    className: ".image-active",
    duration: 1,
  })

})

// const memberCardImage = document.querySelector(".member-image-wrapper img");
// const cardOverlay = document.querySelector(".card-overlay");

// memberCardImage.addEventListener("mousemove", (e) => {
//   console.log(e.clientX)
//   console.log(e.clientY)
//   cardOverlay.style.left = e.clientX + "px"
//   cardOverlay.style.top = e.clientY + "px"
// })

// window.addEventListener("load",() => {
//   document.getElementById("landing-video").play();
// })

document.querySelectorAll(".bubble-btn").forEach((btn) => {
  btn.addEventListener("mousemove",(e) => {
    
    var rect = btn.getBoundingClientRect();
    var x = (e.clientX - rect.left)/10;
    var y = (e.clientY  - rect.top)/10;
    
    
  
    btn.firstElementChild.style.transform = `translate3d(${x}px,${y}px,0px)`
    btn.style.transform = `translate3d(${x}px,${y}px,0px)`
  })
  
  btn.addEventListener("mouseleave",() => {
    
    btn.firstElementChild.style.transform = `translate3d(${0}px,${0}px,0px)`
    btn.style.transform = `translate3d(${0}px,${0}px,0px)`
  })
})
