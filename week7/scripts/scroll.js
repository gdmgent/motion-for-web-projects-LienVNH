let articles = gsap.utils.toArray('article');

articles.forEach(article => {

gsap.from(article, {
    scrollTrigger:{
        trigger:article,
        toggleActions: "play reverse play reverse",
        start: "top 80%",
        end: "bottom 20%",
    },
    duration: 0.5, 
    x: -300, 
    opacity: 0});

});