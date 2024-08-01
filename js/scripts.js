function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');

// -------------------- E-MAIL HIDE -----------------------------
// var parts = ["sangler", "ua", "com", "&#46;", "&#64;"];
// var email = parts[0] + parts[4] + parts[0] + parts[3] + parts[2] + parts[3] + parts[1];
// document.getElementById("email").innerHTML = email;

document.querySelectorAll('.email').forEach(function (element) {
    var parts = ["sangler", "ua", "com", ".", "@"];
    var email = parts[0] + parts[4] + parts[0] + parts[3] + parts[2] + parts[3] + parts[1];

    // Вставити email у <span> всередині елемента
    element.querySelector('.e-mail').innerHTML = email;

    // Додати mailto лінк
    var link = element.querySelector('a');
    link.href = 'mailto:' + email;
});

// ----------------------- Post script --------------------------
// (function () {
//     emailjs.init('zO5RkqA_hTiCfHIFZPLMu'); // Замініть YOUR_USER_ID на ваш користувацький ID з EmailJS
// })();
// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const serviceID = 'YOUR_SERVICE_ID'; // Замініть YOUR_SERVICE_ID на ваш сервіс ID з EmailJS
//     const templateID = 'YOUR_TEMPLATE_ID'; // Замініть YOUR_TEMPLATE_ID на ваш шаблон ID з EmailJS

//     emailjs.sendForm(serviceID, templateID, this)
//         .then(function () {
//             alert('Email sent successfully!');
//         }, function (error) {
//             console.log('Failed to send email:', error);
//             alert('Failed to send email.');
//         });
// });


// -------------------- CAROUSEL --------------------
$(document).ready(function () {
    var owl = $("#myCarousel").owlCarousel({
        items: 1,
        loop: true,
        // nav: true,
        // navText: [
        //     "<i class='fa fa-angle-left'></i>",
        //     "<i class='fa fa-angle-right'></i>"
        // ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

});
