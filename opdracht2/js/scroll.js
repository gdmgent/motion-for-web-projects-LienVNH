let animals = gsap.utils.toArray('article');

animals.forEach(animal => {

gsap.from(animal, {
    scrollTrigger:{
        trigger:"main",
        toggleActions: "play reverse play reverse",
        start: "top 80%",
        end: "bottom 20%",
    },
    duration: 0.5, 
    x: -300, 
    opacity: 0});

});