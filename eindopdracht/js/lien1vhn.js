function lien1vhn(fase) {
  console.log("lien1vhn.js: fase=" + fase)

  let section = document.getElementById("lien1vhn")

  if (!section.init) {
    section.init = true
    // eigen animatie schrijven
    console.log("lien1vhn.js: init")
    section.tl
      // Add 1 : Board  ----------------------------------------------------------------------------------------------------------Board
      .add("intro")

      .from(
        "#lien1vhn .square-white1",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )

      .from(
        "#lien1vhn .square-black5",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )
      .from(
        "#lien1vhn .square-white9",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )
      .from(
        "#lien1vhn .square-black13",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )
      .from(
        "#lien1vhn .square-white17",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )

      .from(
        "#lien1vhn .square-black21",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )

      .from(
        "#lien1vhn .square-white25",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )

      .from(
        "#lien1vhn .square-black29",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },
        "intro"
      )

      .to(
        "#lien1vhn .box",
        {
          rotateX: "50",
          rotateZ: "210",
          rotateY: "200",
          scale: "2",
          transition: "preserve-3d",
          border: "4px solid darkgrey",
          top: "30%",
          left: "20%",
        },
        "intro"
      )

      // Add 2 : INTRO Tekst  ----------------------------------------------------------------------------------------------------------INTRO Tekst

      .add("start")
      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "start"
      )

      .from(
        "#lien1vhn #intro",
        {
          x: "+160",
          y: "+700",
          ease: "ease.in",
        },
        "start"
      )

      // Add 3 : KING----------------------------------------------------------------------------------------------------------KING
      .add("king")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "king"
      )

      .to(
        "#lien1vhn .card-body-king",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "king"
      )

      .to(
        "#lien1vhn #kinggold",
        {
          left: "36%",
          top: "47%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "king"
      )
      //Coloring postion of the king gold.----------------------------------------------------------------------------------------Coloring postion of the king gold.
      .to(
        "#lien1vhn .square-black31",
        {
          border: "2px solid #BF571B",
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      //Adding the possible steps for the king
      .to(
        "#lien1vhn .square-black27",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black26",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-white31",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-white30",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-white27",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )

      .to(
        "#lien1vhn #kingbrown",
        {
          left: "7%",
          top: "14%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "king"
      )
      //Coloring postion of the king brown.----------------------------------------------------------------------------------------Coloring postion of the king brown.
      .to(
        "#lien1vhn .square-white3",
        {
          border: "2px solid #BF571B",
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      //Adding the possible steps for the king
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-white7",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )

      // To do verwijderen als code klaar staat
      // testje kleur die werkte dus even laten staan tot alles goed werkt
      // Animation board tegels: Kleur of aanpassing boord per tegel.
      //.add("color")
      /*.to(
        "#lien1vhn .square-white25",
        {
          opacity: 1,
          backgroundColor: "#2b6cb4",
          border: "3px solid gold",
        },
        "color"
      )*/

      // Add 4 Queen  ----------------------------------------------------Queen
      .add("queen")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "queen"
      )
      //Reset Coloring postion of the king gold.  ---------------------------------------------------Reset Coloring postion of the king gold.
      .to(
        "#lien1vhn .square-black31",
        {
          border: "none",
          backgroundColor: "black",
        },
        "queen"
      )
      //Reset the possible steps for the king
      .to(
        "#lien1vhn .square-black27",
        {
          backgroundColor: "black",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black26",
        {
          backgroundColor: "black",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white31",
        {
          backgroundColor: "white",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white30",
        {
          backgroundColor: "white",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white27",
        {
          backgroundColor: "white",
        },
        "queen"
      )
      //Reset postion of the king brown.  ---------------------------------------------------Reset postion of the king brown.
      .to(
        "#lien1vhn .square-white3",
        {
          border: "none",
          backgroundColor: "white",
        },
        "queen"
      )
      //Reset the possible steps for the king brown ---------------------------------------------------Reset the possible steps for the king brown
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "white",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white7",
        {
          backgroundColor: "white",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "black",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "black",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "black",
        },
        "queen"
      )
      .to(
        "#lien1vhn .card-body-queen",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "queen"
      )
      // position of the Queen gold.  ---------------------------------------------------position of the Queen gold.
      .to(
        "#lien1vhn #queengold",
        {
          left: "31.5%",
          top: "48%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "queen"
      )

      //Coloring postion of the Queen gold .  ---------------------------------------------------Coloring postion of the Queen gold .
      .to(
        "#lien1vhn .square-white30",
        {
          border: "2px solid #BF571B",
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      //Adding the possible steps for the Queen gold  ---------------------------------------------------Adding the possible steps for the Queen gold
      .to(
        "#lien1vhn .square-white27",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black31",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black30",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white26",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black26",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      // adding the queen brown   ---------------------------------------------------adding the queen brown
      .to(
        "#lien1vhn #queenbrown",
        {
          left: "3%",
          top: "15%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "queen"
      )
      //Coloring postion of the queen brown.    ---------------------------------------------------Coloring postion of the queen brown.

      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #BF571B",
        },
        "queen"
      )
      //Adding the possible steps for the queen brown.    ---------------------------------------------------Adding the possible steps for the queen brown.
      .to(
        "#lien1vhn .square-white3",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white2",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )

      .to(
        "#lien1vhn .square-black6",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )

      // Add 5 ROOK   -----------------------------------------------------------------------------------------Add 5 ROOK
      .add("rook")
      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "rook"
      )

      //Reset color postion of the Queen gold.    ---------------------------------------------------Reset color postion of the Queen gold.
      .to(
        "#lien1vhn .square-white30",
        {
          border: "none",
          backgroundColor: "white",
        },
        "rook"
      )
      //Reset the possible steps for the king  ---------------------------------------------------Reset the possible steps for the king
      .to(
        "#lien1vhn .square-white27",
        {
          backgroundColor: "white",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black31",
        {
          backgroundColor: "black",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white31",
        {
          backgroundColor: "white",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black30",
        {
          backgroundColor: "black",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white26",
        {
          backgroundColor: "white",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black26",
        {
          backgroundColor: "black",
        },
        "rook"
      )
      //Reset Coloring postion of the queen brown.    ---------------------------------------------------Reset Coloring postion of the queen brown.

      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "black",
          border: "none",
        },
        "rook"
      )
      //Reset the possible steps for the queen brown.    ---------------------------------------------------Reset the possible steps for the queen brown.
      .to(
        "#lien1vhn .square-white3",
        {
          backgroundColor: "white",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white2",
        {
          backgroundColor: "white",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "white",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black6",
        {
          backgroundColor: "black",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "black",
        },
        "rook"
      )
      // adding the Rook Gold   ---------------------------------------------------adding the Rook Gold
      .to(
        "#lien1vhn .card-body-rook",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "rook"
      )

      .to(
        "#lien1vhn #rookgold",
        {
          left: "23%",
          top: "60%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "rook"
      )
      .to(
        "#lien1vhn #rookgold2",
        {
          left: "44%",
          top: "33%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "rook"
      )
      // adding the Rook brown   ---------------------------------------------------adding the Rook brown
      .to(
        "#lien1vhn #rookbrown",

        {
          left: "-5%",
          top: "28%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "rook"
      )
      .to(
        "#lien1vhn #rookbrown2",

        {
          left: "16%",
          top: "1%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "rook"
      )

      // Add 6 BISHOP  ----------------------------------------------------Add 6 BISHOP
      .add("bishop")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .card-body-bishop",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "bishop"
      )
      .to(
        "#lien1vhn #bishopgold",
        {
          left: "26%",
          top: "56%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "bishop"
      )
      .to(
        "#lien1vhn #bishopgold2",
        {
          left: "41%",
          top: "38%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "bishop"
      )

      .to(
        "#lien1vhn #bishopbrown",

        {
          left: "-2%",
          top: "23%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "bishop"
      )
      .to(
        "#lien1vhn #bishopbrown2",

        {
          left: "13%",
          top: "5%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "bishop"
      )

      // Add KNIGHT ----------------------------------------------------Add KNIGHT
      .add("knight")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "knight"
      )

      .to(
        "#lien1vhn .card-body-knight",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "knight"
      )
      .to(
        "#lien1vhn #knightgold",
        {
          left: "29%",
          top: "52%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
          rotateY: "+145",
        },
        "knight"
      )
      .to(
        "#lien1vhn #knightgold2",
        {
          left: "39%",
          top: "43%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
          rotateY: "+150",
        },
        "knight"
      )

      .to(
        "#lien1vhn #knightbrown",

        {
          left: "0%",
          top: "19%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
          rotateY: "+145",
        },
        "knight"
      )
      .to(
        "#lien1vhn #knightbrown2",
        {
          left: "10%",
          top: "9%",
          width: "20%",
          height: "20%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
          rotateY: "+145",
        },
        "knight"
      )

      // Add pawn
      .add("pawn")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "pawn"
      )

      .to(
        "#lien1vhn .card-body-pawn",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown1",
        {
          left: "24%",
          top: "13%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold1",
        {
          left: "37%",
          top: "44%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown2",
        {
          left: "23%",
          top: "19%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold3",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown3",
        {
          left: "18%",
          top: "22%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold4",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown4",
        {
          left: "16%",
          top: "26%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold5",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown5",
        {
          left: "13%",
          top: "30%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold6",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown6",
        {
          left: "10%",
          top: "34%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold7",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown7",
        {
          left: "7%",
          top: "38%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold8",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawnbrown8",
        {
          left: "4%",
          top: "42%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )
      // add closure
      .add("closure")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "closure"
      )

      .to(
        "#lien1vhn .card-body-closure",
        {
          x: "+160",
          y: "100",
          ease: "stagger.in(1)",
          duration: 1,
        },
        "closure"
      )

      .add("reset")
      .from(
        "#lien1vhn .board",
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
