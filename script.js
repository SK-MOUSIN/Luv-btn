var pic = document.querySelector("img")
var lov = document.querySelector("i")

pic.addEventListener("dblclick", function(){
    lov.style.transform = "translate(-50%, -50%) scale(1)"
    lov.style.opacity = 0.8
    lov.style.color = "red"

    setTimeout(function(){
        lov.style.opacity = 0
        lov.style.transition = "transform ease 0.4s"
    }, 1000)

    setTimeout(function(){
        lov.style.transform = "translate(-50%, -50%) scale(0)"
    }, 500)
})