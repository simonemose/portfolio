console.log("football animation");
let football_section = document.querySelector(".sport");
football_section.addEventListener("mouseover", (event)=>{
    let ball = document.querySelector(".ball");
        ball.classList.add("active");
        console.log("throw");
});


football_section.addEventListener("mouseleave", (event)=>{
            let ball =document.querySelector(".ball").classList.remove("active");
})
