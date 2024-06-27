gsap.registerPlugin(ScrollTrigger)

function smooth(){

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000)
    })
    
    gsap.ticker.lagSmoothing(0)
    
}
smooth();

//////////////////////////////////////////////////

// text-split
const text = new SplitType('#title', { types: 'words, chars'})

// text-animation
let tl=gsap.timeline();

tl.from(".title .char",{
    opacity:0,
    yPercent:130,
    duration:1,
    stagger:0.06,
    ease:"expo out",
})

tl.to(".header__img",{
    clipPath:`polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
    ease:"expo out",
    duration:2
})


//////////////////////////////////////////////////

// 각 영역의 제목의 사각형
let gsapSq=document.querySelectorAll(".section-title__square")
gsapSq.forEach(function(gSq, i){
  let rotate=gsap.from(gSq,{duration:3, rotation:720})
  ScrollTrigger.create({
    trigger:gSq,
    start:"top bottom",
    scrub:1.9,
    animation:rotate
  })
})
//////////////////////////////////////////////////
function header(){

  gsap.to(".title_paralax",{
    scrollTrigger:{
      trigger:".header",
      start:"top top",
      scrub:1.9
    },
    yPercent:300,
  })

  gsap.to(".header .stroke",{
    scrollTrigger:{
      trigger:".header",
      start:"top top",
      scrub:1.9
    },
    yPercent:-50,
  })
  gsap.to(".header__img img",{
    scrollTrigger:{
      trigger:".header",
      start:"top top",
      scrub:1.9
    },
    scale:1.3,
  })
  gsap.to(".header__marq-wrapp",{
    scrollTrigger:{
      trigger:".header",
      start:"top top",
      scrub:1.9
    },
    xPercent:-50,
  })
  gsap.to(".header__marq-star img",{
    scrollTrigger:{
      trigger:".header",
      start:"top top",
      scrub:1.9
    },
    rotate:720,
    // rotation 써도 상관없다.
  })
}
header()
//////////////////////////////////////////////////
function about(){
  gsap.from(".about__img",{
      scrollTrigger:{
          trigger:".about",
          start:"top bottom",
          scrub:1.9
      },
      yPercent:-10
     })

     gsap.to(".about__img img",{
      scrollTrigger:{
          trigger:".about",
          start:"top bottom",
          scrub:1.9
      },
     scale:1.6
      
     })
     gsap.to(".about__txt",{
      scrollTrigger:{
          trigger:".about",
          start:"top bottom",
          scrub:1.9
      },
      yPercent:75
     })
}
about()
//////////////////////////////////////////////////
function benefits(){
  gsap.to(".benefits__num",{
    scrollTrigger:{
        trigger:".benefits__list",
        start:"top bottom",
        scrub:1.9
    },
    // forEach((아이템, 인덱스 번호)=>{}) : 원래 forEach 
    // y:(인덱스 번호, 아이템)=>{} : gsap에서 사용되는 forEach 순서
    // y:(i,el)
    xPercent:100,
   })
}
benefits()
//////////////////////////////////////////////////
function work(){
  gsap.from(".work__item-num",{
    scrollTrigger:{
      trigger:".work",
      start:"top bottom",
      scrub:1.9,
    },
    //y:(indexNumber,item)=>(), : gsap에서는 forEach를 반대로 사용한다.
    y:(i,el)=>(1 - el.getAttribute("data-speed")) // i : 안쓰더라도 매개변수를 주어야 한다.
  })

  gsap.from(".work__item-img img",{
    scrollTrigger:{
      trigger:".work__item",
      top:"top bottom",
      scrub:1.9,
    },
    scale:1.6
  })
}
work()
//////////////////////////////////////////////////
function service(){
  gsap.to(".serv__item-arrow",{
    scrollTrigger:{
      trigger:".serv__list",
      start:"top bottom",
      scrub:1.9,
    },
    //y:(indexNumber,item)=>(), : gsap에서는 forEach를 반대로 사용한다.
    x:(i,el)=>(1 - el.getAttribute("data-speed")) // i : 안쓰더라도 매개변수를 주어야 한다.
  })
}
service()
//////////////////////////////////////////////////
function footer(){
  gsap.from(".footer__div span",{
    scrollTrigger:{
      trigger:".footer",
      start:"top bottom",
      end:"bottom bottom",
      scrub:1.9,
    },
    y:(i,el)=>(1 - el.getAttribute("data-speed"))
  })
}
footer()