const iconMenu = document.querySelector("#iconMenu")
const menu = document.querySelector(".menu")

iconMenu.addEventListener("click", () => {
    menu.classList.toggle("menuActive")

    if(menu.classList.contains("menuActive")){
        iconMenu.classList.add("iconMenuClose") 
    } else{
        iconMenu.classList.remove("iconMenuClose")
    }
})