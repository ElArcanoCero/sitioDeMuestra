var swiper = new Swiper(".mySwiper-1",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }

});
var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");
tabInputs.forEach(function(input){
    input.addEventListener('change', function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

document.querySelectorAll('.navbar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();  // Evitar el comportamiento predeterminado del enlace

        // Obtiene el id del tab (sin el #)
        let tabId = this.getAttribute('href').substring(1);

        // Activa el input de radio cuyo valor coincide con el id del tab
        let tabInput = document.querySelector(`input.tabInput[value="${tabId}"]`);
        if (tabInput) {
            tabInput.checked = true;
        }

        // Desplaza suavemente hacia el contenedor del tab (esto es opcional, según el diseño)
        let tabContent = document.getElementById(tabId);
        if (tabContent) {
            // Define el offset, por ejemplo, el alto del header
            let headerOffset = 170;  // Ajusta este valor según el alto de tu header
            let elementPosition = tabContent.getBoundingClientRect().top;
            let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// funcion mostrar mas
function toggleText() {
    const infoText = document.querySelector('.info-text');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    // Cambia entre clases para expandir o contraer el texto
    if (infoText.classList.contains('expanded')) {
        infoText.classList.remove('expanded');
        toggleBtn.textContent = 'Mostrar más';  // Cambia el texto del botón
    } else {
        infoText.classList.add('expanded');
        toggleBtn.textContent = 'Mostrar menos';
    }
}