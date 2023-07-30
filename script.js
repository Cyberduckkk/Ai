let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

function changeBg(){
    var scrollNavbar = document.getElementById("scroll-nav")
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        scrollNavbar.classList.remove('bgColor')
    }else{
        scrollNavbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll' , changeBg);
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
        );
    }