let navbar = document.getElementById("navbar") ;
let dark   = document.getElementById("darkmode")

addEventListener("scroll",function(){

    if (this.scrollY>200){
        navbar.classList.remove("navActive")
        navbar.classList.add("navNonActive")
dark.src = "images/logo-dark.png"
console.log(dark)
    }
    else{
        navbar.classList.remove("navNonActive")
        navbar.classList.add("navActive")
        dark.src = "images/logo-light.png"

    }

})
