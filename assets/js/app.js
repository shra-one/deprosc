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

  $(".js-teamcarousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "40",
    prevArrow: `<div class="slick-prev"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-3.68924e-07 8.44965C-3.5144e-07 8.84965 0.159999 9.22965 0.439999 9.50965L7.42 16.4496C7.7 16.7496 8.08 16.8896 8.46 16.8896C8.86 16.8896 9.24 16.7496 9.54 16.4496C10.12 15.8496 10.12 14.9096 9.52 14.3296L3.62 8.44965L9.52 2.56965C10.12 1.98965 10.12 1.02965 9.54 0.449649C8.94 -0.150351 8 -0.150351 7.42 0.449649L0.439999 7.38965C0.159999 7.66965 -3.86409e-07 8.04965 -3.68924e-07 8.44965Z" fill="#A3A3A3"/></svg></div>`,
    nextArrow: `<div class="slick-next"><svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.97266 8.44098C9.97266 8.04098 9.81266 7.66098 9.53266 7.38098L2.55266 0.440976C2.27266 0.140976 1.89266 0.00097621 1.51266 0.000976194C1.11266 0.000976176 0.732657 0.140976 0.432657 0.440976C-0.147343 1.04098 -0.147345 1.98098 0.452656 2.56098L6.35266 8.44098L0.452655 14.321C-0.147345 14.901 -0.147343 15.861 0.432657 16.441C1.03266 17.041 1.97266 17.041 2.55266 16.441L9.53266 9.50098C9.81266 9.22098 9.97266 8.84098 9.97266 8.44098Z" fill="#A3A3A3"/>
      </svg>
      </div>`,
    // adaptiveHeight: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10",
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
