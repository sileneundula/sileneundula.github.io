// On-Click perform dropdown
function navbar_dropdown() {
    const myNav = document.querySelector("#navbar");
    const burger = document.querySelector("#burger");
    
    myNav.classList.toggle("is-active");
    burger.classList.toggle("is-active");
}