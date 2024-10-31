// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('bg-slate-950')
        header.classList.add('bg-opacity-60')
        header.classList.add('backdrop-blur-md')
    } else {
        header.classList.remove('bg-slate-950')
        header.classList.remove('bg-opacity-60')
        header.classList.remove('backdrop-blur-md')
    }
}

