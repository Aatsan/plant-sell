// LocomotiveScroll code 
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap animation code 
gsap.from(".nlink", {
    stagger: .2,
    y:15,
    delay: 0.6,
    duration:1.5,
    ease: Power2,
    opacity: 0


})
gsap.from("#imgntext img",{
    // z:"-3",
    z:"50",
    delay: .4,
    duration: 1.4,
})
gsap.from("#susimagewrapper img",{
    y:"200",
    delay: .4,
    duration: 1.4,
})

// code of D-O-M mix gsap
document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration:.9,
        ease:Power4

    })
})
   
document.querySelector("#ftext button")
.addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:.5,
        ease:Power4

    })

})

// shery js code 
Shery.textAnimate("#headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anim2",{
    y: 90,
    stagger: .5,
    opacity: 0,
    ease: Expo,
    duration: .7
})

Shery.imageEffect("#imgntext img",{
    style:3,
    config:{"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":12.4,"range":[0,100]},"uFrequencyZ":{"value":15.7,"range":[0,100]},"geoVertex":{"range":[1,64],"value":24.95},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
})

Shery.imageEffect(".imgff img",{
    style:5,
    config:{"a":{"value":2.48,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.46,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":24.95},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":12.4,"range":[0,100]},"uFrequencyZ":{"value":15.7,"range":[0,100]}},
})
Shery.imageEffect("#bimg",{
    style:5,
    gooey:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7722182894652165},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.26,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":36}},"discard_threshold":{"value":0.55,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},

})
