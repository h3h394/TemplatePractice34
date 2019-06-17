let nav = document.querySelector('nav');
let menu = document.querySelectorAll('.menu a');
document.getElementById('burger').addEventListener('click', function () {
    nav.classList.toggle('hide');
    nav.style.transition = 'all 500ms';
});

menu.forEach(el => {
    el.addEventListener("click", () => {
        nav.classList.toggle('hide');
    });
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        900,
        'linear'
    )
});