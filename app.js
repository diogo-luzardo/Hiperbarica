const navSlide = () => {
    const toggle = document.querySelector('.toggle')
    const nav = document.querySelector('.nav-links')

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();
