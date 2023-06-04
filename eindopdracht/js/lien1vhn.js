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
          border: "2px solid #004746",
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
          border: "2px solid #004746",
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      //Adding the possible steps for the king
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-white7",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "#D9AD66",
        },
        "king"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "#D9AD66",
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
          border: "2px solid #004746",
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
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "queen"
      )
      //Adding the possible steps for the queen brown.    ---------------------------------------------------Adding the possible steps for the queen brown.
      .to(
        "#lien1vhn .square-white3",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white2",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
        },
        "queen"
      )

      .to(
        "#lien1vhn .square-black6",
        {
          backgroundColor: "#D9AD66",
        },
        "queen"
      )
      .to(
        "#lien1vhn .square-black7",
        {
          backgroundColor: "#D9AD66",
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
          left: "25%",
          top: "63%",
          width: "20%",
          height: "20%",
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
      /*Adding the possible steps for the Rook .    ---------------------------------------------------Adding the possible steps for the Rook Gold.*/

      .to(
        "#lien1vhn .square-white1",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black4",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white32",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black29",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white9",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black5",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white17",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black13",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white25",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black21",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      // Row 1
      .to(
        "#lien1vhn .square-white2",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white3",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white4",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black1",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      // Row 8 ---------------------------------------------------Row 8
      .to(
        "#lien1vhn .square-black32",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-white31",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white30",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black31",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black30",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-white29",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      // Row horizontal 1---------------------------------------------------Row horizontal 1
      .to(
        "#lien1vhn .square-black12",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-white8",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-white16",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )
      .to(
        "#lien1vhn .square-black20",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-black28",
        {
          backgroundColor: "#00706e",
        },
        "rook"
      )

      .to(
        "#lien1vhn .square-white24",
        {
          backgroundColor: "#00706e",
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
      //Reset color steps Rook---------------------------------------------------Reset color steps Rook
      /*Adding the possible steps for the Rook .    ---------------------------------------------------Adding the possible steps for the Rook Gold.*/

      .to(
        "#lien1vhn .square-white1",
        {
          backgroundColor: "white",
          border: "none",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black4",
        {
          backgroundColor: "black",
          border: "none",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white32",
        {
          backgroundColor: "white",
          border: "none",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black29",
        {
          backgroundColor: "black",
          border: "none",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white9",
        {
          backgroundColor: "white",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black5",
        {
          backgroundColor: "black",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white17",
        {
          backgroundColor: "white",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black13",
        {
          backgroundColor: "black",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white25",
        {
          backgroundColor: "white",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black21",
        {
          backgroundColor: "black",
        },
        "bishop"
      )
      // Row 1
      .to(
        "#lien1vhn .square-white2",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white3",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white4",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black1",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black2",
        {
          backgroundColor: "black",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      // Row 8 ---------------------------------------------------Row 8
      .to(
        "#lien1vhn .square-black32",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-white31",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white30",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black31",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black30",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-white29",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      // Row horizontal 1---------------------------------------------------Row horizontal 1
      .to(
        "#lien1vhn .square-black12",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-white8",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-white16",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black20",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-black28",
        {
          backgroundColor: "black",
        },
        "bishop"
      )

      .to(
        "#lien1vhn .square-white24",
        {
          backgroundColor: "white",
        },
        "bishop"
      )
      // add 6 BISHOP  ----------------------------------------------------add 6 BISHOP
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
        "#lien1vhn .square-black1",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black6",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black10",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black15",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black19",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black24",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
        },
        "bishop"
      )
      .to(
        "#lien1vhn .square-black28",
        {
          backgroundColor: "hsla(179, 100%, 22%, 0.5)",
          border: "2px solid #004746",
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
        "#lien1vhn .square-black1",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black6",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black10",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black15",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black19",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black24",
        {
          backgroundColor: "black",
          border: "none",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-black28",
        {
          backgroundColor: "black",
          border: "none",
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
        "#lien1vhn .square-black3",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-white8",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-white11",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "knight"
      )
      .to(
        "#lien1vhn .square-white12",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
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

      // Add pawn ----------------------------------------------------Add pawn
      .add("pawn")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-black3",
        {
          backgroundColor: "black",
          border: "none",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-white6",
        {
          backgroundColor: "white",
          border: "none",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-white8",
        {
          backgroundColor: "white",
          border: "none",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-white11",
        {
          backgroundColor: "white",
          border: "none",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-white12",
        {
          backgroundColor: "white",
          border: "none",
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
        "#lien1vhn .square-black7",
        {
          backgroundColor: "#D9AD66",
          border: "2px solid #004746",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-black15",
        {
          backgroundColor: "#D9AD66",
        },
        "pawn"
      )
      .to(
        "#lien1vhn .square-white11",
        {
          backgroundColor: "#D9AD66",
        },
        "pawn"
      )

      .to(
        "#lien1vhn #pawngold1",
        {
          left: "24%",
          top: "66%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
        },
        "pawn"
      )
      .to(
        "#lien1vhn #pawngold2",
        {
          left: "43%",
          top: "36%",
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
          left: "26%",
          top: "62%",
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
        "#lien1vhn #pawngold5",
        {
          left: "29%",
          top: "57%",
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
          left: "41%",
          top: "40%",
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
          left: "32%",
          top: "53%",
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
          left: "35%",
          top: "49%",
          width: "12%",
          height: "12%",
          objectFit: "contain",
          position: "fixed",
          opacity: 1,
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
        "#lien1vhn #pawnbrown2",
        {
          left: "21%",
          top: "17%",
          width: "12%",
          height: "12%",
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
        "#lien1vhn .square-black7",
        {
          backgroundColor: "black",
          border: "none",
        },
        "closure"
      )
      .to(
        "#lien1vhn .square-black15",
        {
          backgroundColor: "black",
        },
        "closure"
      )
      .to(
        "#lien1vhn .square-white11",
        {
          backgroundColor: "white",
        },
        "closure"
      )
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
          x: "+190",
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
          rotateX: "180",
          rotateZ: "360",
          rotateY: "360",
          scale: "1",
          transition: "preserve-3d",
          border: "0px solid darkgrey",
          x: "100%",
          rotate: "45deg",
          backgroundColor: "white",
        },
        "reset"
      )

      .to(
        "#lien1vhn .card-body-closure",
        {
          opacity: 0,
        },
        "reset"
      )
      .to(
        "#lien1vhn #kinggold",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #kingbrown",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )

      .to(
        "#lien1vhn #queengold",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #queenbrown",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #knightgold",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #knightbrown",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #knightgold2",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #knightbrown2",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #rookgold",
        {
          x: "400%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #rookbrown",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #rookgold2",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #rookbrown2",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )

      .to(
        "#lien1vhn #bishopgold",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #bishopbrown",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #bishopgold2",
        {
          x: "300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #bishopbrown2",
        {
          x: "-200%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawnbrown1",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold1",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawnbrown2",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold2",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawnbrown3",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold3",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawnbrown4",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold4",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )

      .to(
        "#lien1vhn #pawnbrown5",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold5",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )

      .to(
        "#lien1vhn #pawnbrown6",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold6",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )

      .to(
        "#lien1vhn #pawnbrown7",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold7",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawnbrown8",
        {
          x: "-300%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
      .to(
        "#lien1vhn #pawngold8",
        {
          x: "800%",
          Y: "200%",
          rotate: "360deg",
          ease: "back.out(1)",
        },
        "reset"
      )
    
  
  }
}
