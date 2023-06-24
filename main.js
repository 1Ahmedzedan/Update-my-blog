let button = document.querySelector(".up") ;
let nav = document.querySelector(".nav-bar") ;
let navLinks = document.querySelectorAll(".nav-link li a") ;

console.log(navLinks) ;
function deleteActive(){
    navLinks.forEach(link=>{
        link.classList.remove("active") ;
    })
}


window.onscroll = ()=>{
    deleteActive() ;
    if(this.scrollY >= 550){
        button.classList.add("show") ;
        nav.classList.add("sticky") ;
    }
    else{
        button.classList.remove("show");
        nav.classList.remove("sticky") ;
    }

    if(this.scrollY >= 0 && this.scrollY < 580){
        navLinks[0].classList.add("active") ;
    }
    else if(this.scrollY >= 580 && this.scrollY < 1200){
        navLinks[1].classList.add("active") ;
    }
    else if(this.scrollY >= 1200 && this.scrollY < 1500){
        navLinks[2].classList.add("active") ;
    }
    else{
        navLinks[3].classList.add("active") ;
    }
}

button.onclick = ()=>{
    window.scrollTo({
        top:0
    })
}


let lightButton = document.querySelector(".light-button") ;
let darkButton = document.querySelector(".dark-button") ;
let body = document.querySelector("body") ;
let home = document.querySelector(".home") ;
lightButton.onclick = ()=>{
    lightButton.style.display = "none" ;
    darkButton.style.display = "block" ;
    body.style.backgroundColor = "#fff" ;
    nav.style.backgroundColor = "#2596be" ;
    // home.style.backgroundColor = "#fff" ;
    body.style.color = "#000" ;

}

darkButton.onclick = ()=>{
    darkButton.style.display = "none" ;
    lightButton.style.display = "block" ;
    body.style.backgroundColor = "#000" ;
    nav.style.backgroundColor = "#01031A" ;
    // home.style.backgroundColor = "#01031A" ;
    body.style.color = "#fff" ;
}
