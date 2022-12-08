$(function(){
    "use strict";
    feather.replace();
    // Popular slider 
    $(".popular_slider").slick({
        slidesToShow:3,
        centerMode:true,
        centerPadding: "150px",
        arrows:false,
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                centerMode:false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })

    // navbar-toggler

    // let navbar_toggler = document.querySelector(".navbar-toggler");
    // navbar_toggler.addEventListener("click", function() {
    //     navbar_toggler.classList.toggle("color")
    // })
})

