$('.st-row').slick({
    responsive: [{
      breakpoint: 100000,
      settings: "unslick"
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('.st_dots'),
      }
    }
    ]
  });