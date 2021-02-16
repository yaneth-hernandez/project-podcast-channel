//changeClassElement()
searchStyleSheet()

function mostrarNavBarrMobile() {
    let nav = document.getElementById('menu-bar-id')
    nav.addEventListener('click', function() {
        changeClassElementSmall()
    })
}

window.addEventListener('load', mostrarNavBarrMobile)

function changeClassElementSmall() {
    let nav = document.getElementById('menu-bar-id')
    let menuNav = document.getElementById('lista-menu')
    let lowReview = document.getElementById('review-id')

    nav.classList.toggle('ver-lista-menu')
    menuNav.classList.toggle('ver-nav-bar')
    lowReview.classList.toggle('low-review')
}


function changeClassElementLarge() {
    let nav = document.getElementById('menu-bar-id')
    let menuNav = document.getElementById('lista-menu')
    let lowReview = document.getElementById('review-id')

    nav.classList.toggle('ver-lista-menu')
    menuNav.classList.toggle('ver-nav-bar')
    lowReview.classList.toggle('low-review')
}
/* let styleSheet = document.styleSheets[2].href;
console.log(styleSheet) */

function searchStyleSheet() {
    for (let i = 0; i < document.styleSheets.length; i++) {
        var styleSheet = document.styleSheets[i].href;
    }
    return styleSheet
}