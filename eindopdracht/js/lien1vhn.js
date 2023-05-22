function lien1vhn (fase) {
    console.log("lien1vhn.js: fase=" + fase);
    let section = document.getElementById("lien1vhn");
    
    if(!section.init){
        section.init = true;
        // eigen animatie schrijven
        console.log("lien1vhn.js: init");
        section.tl
        .to("#lien1vhn .box",{
            rotation: 360,
            left:0,
            top:0,
            width:"100%",
            height:"100%",
        })
            
        }
    }
        
            
    

