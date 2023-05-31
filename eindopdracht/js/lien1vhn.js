function lien1vhn(fase) {
  console.log("lien1vhn.js: fase=" + fase);
  let section = document.getElementById("lien1vhn");

  if (!section.init) {
    section.init = true;
    // eigen animatie schrijven
    console.log("lien1vhn.js: init");
    section.tl
      .add("intro")
        .from("#lien1vhn .square-white", {
          width: "20vw",
          height: "20vw",
        }, "intro")
        .to("#lien1vhn .box", {
          rotateX: "50",
          rotateZ: "210",
          rotateY: "200",
          scale: "2",
          transition: "preserve-3d",
          border: "4px solid darkgrey",
        }, "intro")
        .add("king")
          .to("#lien1vhn .box", {
            scale: "2",
          }, "king")
          .to("#lien1vhn .kinggold", {
            left: "50%",
            top: "50%",
            width: "10vw",
            height: "10vh",
            objectFit: "contain",
            position: "fixed",
          } , "king")
        .add("queen")
          .to("#lien1vhn .box", {
            scale: "2",
          }, "queen")

        .add("asdf")


          
        .add("qwer")
        .add("terw")
        .add("rtuy")
      .add("reset")
        .from("#lien1vhn .square-black", {
          //opacity: 0,
        }, "reset")
        .to("#lien1vhn .box", {
          rotateX: "0",
          rotateZ: "0",
          rotateY: "0",
          scale: "1",
          transition: "preserve-3d",
          border: "0px solid darkgrey",
        }, "reset")
        
          
  }
}     
      


