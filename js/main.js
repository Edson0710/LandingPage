$(document).ready(function () {

    var typed = new Typed('.typed', {
        strings: [
            "Hello World! 🌎",
            "I'm Edson Navarro 🙋🏻‍♂️",
            "I'm a Mexican Developer 🌮",
            "I'm a Full Stack Developer 💻",
        ],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        contentType: 'html',

    });

    let animado = document.querySelectorAll('.animado');

    function mostrarScroll(){
        let scrollTop = document.documentElement.scrollTop;
        for(var i=0; i<animado.length; i++){
            let animadoTop = animado[i].offsetTop;
            if(scrollTop > animadoTop - window.innerHeight){
                animado[i].style.opacity = 1;
                animado[i].classList.add('mostrar-arriba');
            }
        }
    }
    
    window.addEventListener('scroll', mostrarScroll);

    cargarBarras();
    function cargarBarras(){
        $(".skills").addClass("active")
        $(".skills .skill .skill-bar span").each(function() {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
        });
        setTimeout(function() {
        $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
        }, 2000);
    }   
});