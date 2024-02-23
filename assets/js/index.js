$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

const miBoton = document.getElementById('miBoton');
miBoton.addEventListener('click', () => {
    Swal.fire({
        title: '¡Hola!',
        text: 'El mensaje fue enviado',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
});