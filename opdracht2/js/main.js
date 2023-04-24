console.log('app.js loaded');

let timeline = gsap.timeline({repeat: -1, yoyo: true});

timeline.to('.chapter1', {duration: 1, x: 300, y: 200, rotation: 360});
timeline.to('.chapter2', {duration: 1, x: 300, y: 200, rotation: 360, backgroundColor: "red", borderRadius: "50%", stagger: .5});
timeline.from('nav', {duration: 0.5, x: "-300px", opacity: 0, stagger:.5, color: "pink", ease: "back"});