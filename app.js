let menuIcon = document.getElementById('menu-icon')
let navBar  = document.getElementById('menu')
menuIcon.addEventListener('click', showOrHideNavigationBar)
function showOrHideNavigationBar(){
    if (menuIcon.getAttribute('src') === "./images/icon-hamburger.svg"){
        navBar.className = "menu show"
        menuIcon.src = './images/icon-close.svg'
    }
    else{
        navBar.className = "menu hide "
        menuIcon.src = './images/icon-hamburger.svg'
    }
}
