const img = document.getElementById("img")
const bar = document.querySelector(".bar")
const para = document.querySelectorAll(".para")
const boxclick = document.querySelectorAll(".boxclick")
const arr = document.querySelectorAll(".arrow")


let flag = true
img.addEventListener("click", () => {

    para.forEach((w) => {
        w.style.height = 0
        arr.forEach((ai) => {
            ai.style.transform = "rotate(0deg)"
        })
        //  w.previousElementSibling.children[2].children[0].style.transform = "rotate(0deg)"
    })

    if (flag == true) {

        img.style.transform = "rotate(360deg)"
        img.src = "img/icons8-cross-94.png"
        bar.style.left = "1px"



    } else {
        img.style.transform = "rotate(0deg)"
        img.src = "img/icons8-menu-94.png"
        bar.style.left = "-500%"

    }
    flag = !flag



})

para.forEach((val) => {
    val.setAttribute("data-status", "off")
    val.setAttribute("data-height", val.clientHeight)
    val.style.height = "0"




    boxclick.forEach((h2, i) => {

        h2.addEventListener("click", () => {


            para.forEach((para2, index) => {

                if (i != index) {

                    para2.style.height = 0
                    para2.dataset.status = "off"
                    para2.previousElementSibling.children[2].children[0].style.transform = "rotate(0deg)"


                }
            })







            if (h2.nextElementSibling.getAttribute("data-status") == "off") {

                h2.nextElementSibling.style.height = h2.nextElementSibling.getAttribute("data-height") + "px"
                h2.nextElementSibling.dataset.status = "on"
                h2.children[2].children[0].style.transform = "rotate(180deg)"


            } else {


                h2.nextElementSibling.style.height = 0
                h2.nextElementSibling.dataset.status = "off"
                h2.children[2].children[0].style.transform = "rotate(0deg)"




            }

        })

    })

})