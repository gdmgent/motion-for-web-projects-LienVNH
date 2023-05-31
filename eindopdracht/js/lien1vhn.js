function lien1vhn(fase) {
  console.log("lien1vhn.js: fase=" + fase);
  let section = document.getElementById("lien1vhn");

  if (!section.init) {
    section.init = true;
    // eigen animatie schrijven
    console.log("lien1vhn.js: init");
    section.tl
      .from("#lien1vhn .square-white", {
        width: "20vw",
        height: "20vw",
      })

      .to("#lien1vhn .box", {
        rotateX: "50",
        rotateZ: "210",
        rotateY: "200",
        scale: "2",
        transition: "preserve-3d",
        border: "4px solid darkgrey",
      })
    
      .add(".intro" ,{
      progress: (0.5),})
      
     
   
   
          
}
}     
      


