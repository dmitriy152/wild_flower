if(document.querySelector(".header")){
    let openPopupButton = document.querySelector(".lines")
    let closePopupButton = document.querySelector(".cross")
    let popup = document.querySelector(".header__nav")
    let overlay = document.querySelector(".overlay")
    openPopupButton.addEventListener("click",function(){
        if(overlay.classList.contains("overlay-active")){
            overlay.classList.remove("overlay-active")
        }
        popup.classList.add("header__nav-active")
        closePopupButton.classList.toggle("visible")
        openPopupButton.classList.toggle("hidden")
        overlay.classList.add("overlay-active")
    })
    closePopupButton.addEventListener("click",function(){
        popup.classList.remove("header__nav-active")
        closePopupButton.classList.toggle("visible")
        openPopupButton.classList.toggle("hidden")
        overlay.classList.remove("overlay-active")
    })
}
if(document.querySelector(".modal_window")){
    let modal = document.querySelector(".modal_window")
    let overlay = document.querySelector(".overlay")
    let openModalButton = document.querySelector(".buy")
    let closeModalButton = document.querySelector(".close__modal")
    let send = document.querySelector(".send")
    openModalButton.addEventListener("click", function(event){
        event.preventDefault()
        if(overlay.classList.contains("overlay-active")){
            overlay.classList.remove("overlay-active")
        }
        overlay.classList.add("overlay-active")
        modal.classList.add("modal_window-active")
    })
    closeModalButton.addEventListener("click", (e)=>{
        overlay.classList.remove("overlay-active")
        modal.classList.remove("modal_window-active")
    })
    send.addEventListener("click", (e)=>{
        overlay.classList.remove("overlay-active")
        modal.classList.remove("modal_window-active")
    })
}