(function () {
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper')
window.onscroll = () => {
    if (window.pageYOffset > 100) {
        header.classList.add('header_active');
        headerWrapper.classList.add('header__wrapper_active')
    } else {
        header.classList.remove('header_active')
        headerWrapper.classList.remove('header__wrapper_active')
    }
}
}())