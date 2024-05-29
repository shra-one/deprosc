$(function () {
  AOS.init();
  var lastScroll = 0;
  var header = $(".navbar").outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= header) {
      $("#header").addClass("sticky");
      var head = $(".navbar").outerHeight();
      document.documentElement.style.setProperty("--headerWidth", head + "px");
    } else {
      $("#header").removeClass("sticky");
      document.documentElement.style.setProperty(
        "--headerWidth",
        header + "px"
      );
    }
  });

  $(".js-counter").countUp({
    time: 2000,
    delay: 10,
  });

  $("#partner-carousel").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: false,
    speed: 900,
    autoplaySpeed: 700,
    appendArrows: $("#slidecontrols"),
    prevArrow: `<div class="icon">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 20L10 14.4553L16 9" stroke="#0093FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="14" cy="14" r="13.5" stroke="#0093FF"/>
      </svg>
    </div>
    
    `,
    nextArrow: `<div class="icon">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 20L18 14.4553L12 9" stroke="#0093FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle r="13.5" transform="matrix(-1 0 0 1 14 14)" stroke="#0093FF"/>
      </svg>
    </div>
    
    `,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $("#js-testimonial").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    autoplay: false,
    adaptiveHeight: true,
    speed: 900,
    autoplaySpeed: 700,
    mobileFirst: true,
    appendArrows: $("#slidecontrols"),
    prevArrow: `<div class="icon">
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.13188 14.0274L1.10547 8.00102L7.13188 1.97461" fill="#FF7E29"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.83899 1.2675C8.22951 1.65803 8.22951 2.29119 7.83899 2.68172L2.51968 8.00102L7.83899 13.3203C8.22951 13.7108 8.22951 14.344 7.83899 14.7345C7.44846 15.1251 6.8153 15.1251 6.42477 14.7345L0.398362 8.70813C0.210826 8.52059 0.105469 8.26624 0.105469 8.00102C0.105469 7.7358 0.210826 7.48145 0.398362 7.29391L6.42477 1.2675C6.8153 0.876978 7.44846 0.876978 7.83899 1.2675Z" fill="white"/>
    </svg>
    
    
    </div>
    
    `,
    nextArrow: `<div class="icon">
    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.86812 1.97266L7.89453 7.99907L1.86812 14.0255" fill="#FF7E29"/>
    <path d="M1.86812 1.97266L7.89453 7.99907L1.86812 14.0255" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
    </div>
    
    `,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.3,
        },
      },
    ],
  });

  AOS.refresh();
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
