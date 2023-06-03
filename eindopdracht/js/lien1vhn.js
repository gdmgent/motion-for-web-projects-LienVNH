function lien1vhn(fase) {
  console.log("lien1vhn.js: fase=" + fase)

  let section = document.getElementById("lien1vhn")

  if (!section.init) {
    section.init = true
    // eigen animatie schrijven
    console.log("lien1vhn.js: init")
    section.tl
      // Add 1 : Board
      .add("intro")

      .from(
        "#lien1vhn .square-white1",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
          
        }, "board")
      
      .from(
        "#lien1vhn .square-black5",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },"board")
      .from(
        "#lien1vhn .square-white9",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        },"board")
      .from(
        "#lien1vhn .square-black13",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
          
        }, "board")
      .from(
        "#lien1vhn .square-white17",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        }, "board")

      .from(
        "#lien1vhn .square-black21",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        }, "board")
      
      .from(
        "#lien1vhn .square-white25",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        }, "board")
      
      .from(
        "#lien1vhn .square-black29",
        {
          width: "20vw",
          height: "20vw",
          opacity: 0,
        }, "board")
    
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
        },"board")

// Add 2 : INTRO Tekst 

      .add("intro")
       .to("#lien1vhn .box",
        {
          scale: "2",
        }, "intro")

      .from("#lien1vhn #intro",
        {
          x: "+160",
          y: "+700",
          ease: "ease.in",
          opacity:1,  
        }, "intro")
     
      
// Add 3 : KING 
      .add("king")

      .to("#lien1vhn .box",
        {
          scale: "2",
        }, "king")
      
      .from("#lien1vhn #king",
        {
          x: "+160",
          y: "+700",
          ease: "ease.in",
          opacity:1,  
        }, "king")
          
    
      
      .from("#lien1vhn #kinggold",
        {
          left: "20%",
          top: "30%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "intro")
                
      .to("#lien1vhn #kingbrown",
        {
          left: "27%",
          top: "10%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"intro")
// hier stappen nog toevoegen van de koning op het bord 
      .to("#lien1vhn .square-white16",
        {
          backgroundColor: "#2b6cb4",
        }, "king")

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

// Add 4 Queen 
      .add("queen")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        }, "queen")
      .to("#lien1vhn #kinggold",
        {
          scale: "1",
        }, "board")

      .from("#lien1vhn .card-body-queen",
        {
          x: "+600",
          y: "+900",
          opacity:1,  
        }, "queen")
      
      .to(
        "#lien1vhn #queengold",
        {
          left: "52%",
          top: "50%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "intro")
      
      .to(
        "#lien1vhn #queenbrown",
        {
          left: "23%",
          top: "12%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"intro")

// Add 5 ROOK 
      .add("rook")
      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"rook")

      .from("#lien1vhn #rook",
        {
          x: "+600",
          y: "+900",
          opacity:1,  
        }, "rook")
      
      .to(
        "#lien1vhn #rookgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "rook")
      
      .to(
        "#lien1vhn #rookbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"rook")

// Add 6 BISHOP 
      .add("bishop")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"bishop")
      
      .from("#lien1vhn #bishop",
        {
          x: "+600",
          y: "+900",
          opacity:1,  
        }, "bishop")
      
      .to("#lien1vhn #bishopgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "bishop") 

      .to("#lien1vhn #bishopbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"bishop")

// Add KNIGHT 
      .add("knight")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        }, "knight")
      
      .from("#lien1vhn #knight",
        {
          x: "+600",
          y: "+900",
          opacity:1,  
        },"knight")

      .to(
        "#lien1vhn #knightgold",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          rotateY: "180",
        },"knight")

      .to(
        "#lien1vhn #knightbrown",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          rotateY: "180",
        },"knight")

// Add pawn 
      .add("pawn")

      .to(
        "#lien1vhn .box",
        {
          scale: "2",
        },"pawn")

      .from("#lien1vhn #pawn",
        {
          x: "+600",
          y: "+900",
          opacity:1,  
        }, "pawn")
      
      .to(
        "#lien1vhn #pawnbrown1",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
          delay: 1,
        }, "pawn")
      
      .to(
        "#lien1vhn #pawngold2",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown2",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "pawn")
      
      .to(
        "#lien1vhn #pawngold3",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown3",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")
      
      .to(
        "#lien1vhn #pawngold4",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown4",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "pawn")
      
      .to(
        "#lien1vhn #pawngold5",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown5",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawngold6",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown6",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawngold7",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

      .to(
        "#lien1vhn #pawnbrown7",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        }, "pawn")
      
      .to(
        "#lien1vhn #pawngold8",
        {
          left: "54%",
          top: "54%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")
  
      .to(
        "#lien1vhn #pawnbrown8",
        {
          left: "20%",
          top: "14%",
          width: "23%",
          height: "23%",
          objectFit: "contain",
          position: "fixed",
        },"pawn")

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
