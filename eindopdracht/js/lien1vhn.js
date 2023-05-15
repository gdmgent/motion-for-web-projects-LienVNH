function lien1vhn (fase) {
    console.log("lien1vhn.js: fase=" + fase);
    let section = document.getElementById("lien1vhn");
    
    if(!section.init){
        section.init = true;
        // eigen animatie schrijven
        console.log("lien1vhn.js: init");
        section.tl.to("#lien1vhn .box ",{
            borderRadius: "0", 
            backgroundColor: "white",
            Color: "white", 
            rotatian: 360,
            left:"40vw",
            top:"calc(50vh-10vw)",
            width:"20vw",
            height:"20vw",
            
    })

}}