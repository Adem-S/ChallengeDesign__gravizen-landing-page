const navApp = document.querySelector(".nav-app")

const navMobile = document.querySelector(".nav__mobile")

const navMobileIcon = document.querySelector("#nav-mobile-icon")


const navArrowIcon = document.querySelector(".nav-app span")





navApp.addEventListener("click", () => {
    navApp.classList.toggle("nav-app--visible")
    navArrowIcon.classList.toggle("nav-app-icon--rotate")
})

navMobileIcon.addEventListener("click", () => {
    navMobile.classList.add("nav__mobile--visible")
    document.documentElement.style.overflow = 'hidden';
   window.scrollTo(0, 0)
})


navMobile.addEventListener("click", () => {
    navMobile.classList.remove("nav__mobile--visible")
    document.documentElement.style.overflow = 'visible';
})



