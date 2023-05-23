function lien1vhn (fase) {
    console.log("lien1vhn.js: fase=" + fase);
    let section = document.getElementById("lien1vhn");
    
    
    if(!section.init){
        section.init = true;
        // eigen animatie schrijven
        console.log("lien1vhn.js: init");
        section.tl
        .from("#lien1vhn .square-white",{
            
            width:"100vw",
            height:"100vw",
            skewY: "45",
        })

        .to("#lien1vhn .box",{
            rotateX: "60",
            rotateZ: "115",
            rotateY: "115",
            
            
            })

       
      
    }}
        
            
    

