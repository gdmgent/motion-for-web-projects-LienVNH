function lien1vhn(fase) {
  console.log("lien1vhn.js: fase=" + fase)

  let section = document.getElementById("lien1vhn")

  if (!section.init) {
    section.init = true
    // eigen animatie schrijven
    console.log("lien1vhn.js: init")
    section.tl
      .add("intro")

      .from(
        "#lien1vhn .square-white",
        {
          width: "20vw",
          height: "20vw",
        },"intro")

      .to(
        "#lien1vhn .box",
        {
          rotateX: "50",
          rotateZ: "210",
          rotateY: "200",
          scale: "2",
          transition: "preserve-3d",
          border: "4px solid darkgrey",
        },"intro")

      // KING toevoegen
      .add("king")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"king")


      .to(
        "#lien1vhn .kinggold",
        {
          left: "55%",
          top: "42%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"king")

      .to(
        "#lien1vhn .kingbrown",
        {
          left: "27%",
          top: "10%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"king")

      // To Do
      // Animation board tegels: Kleur of aanpassing boord per tegel.
      .add("color")
      .to(
        "lien1vhn .square-white",
        {
          opacity: 1,
          backgroundColor: "#2b6cb4",
        },"color")

      // Queen toevoegen.
      .add("queen")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"queen")

      .to(
        "#lien1vhn .queengold",
        {
          left: "52%",
          top: "50%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"queen")

      .to(
        "#lien1vhn .queenbrown",
        {
          left: "23%",
          top: "12%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"queen")

      // ROOK Toevoegen
      .add("rook")
      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"rook")

      .to(
        "#lien1vhn .rookgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"rook")

      .to(
        "#lien1vhn .rookbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"rook")

      // BISHOP Toevoegen
      .add("bishop")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"bishop")

      .to(
        "#lien1vhn .bishopgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"bishop")

      .to(
        "#lien1vhn .bishopbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },
        "bishop")

      // KNIGHT Toevoegen
      .add("knight")

      
      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"knight")

      .to(
        "#lien1vhn .knightgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          rotateY:"180"
        },"knight")

      .to(
        "#lien1vhn .knightbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          rotateY:"180"
        },
        "knight")

      // PAWN Toevoegen
      .add("rtuy")
      .add("reset")
      .from(
        "#lien1vhn .square-black",
        {
          //opacity: 0,
        },
        "reset"
      )
      .to(
        "#lien1vhn .box",
        {
          rotateX: "0",
          rotateZ: "0",
          rotateY: "0",
          scale: "1",
          transition: "preserve-3d",
          border: "0px solid darkgrey",
        },
        "reset"
      )
  }
}
