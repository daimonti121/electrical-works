$('.center').slick({
  centerMode: true,
  centerPadding: '20px',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 979,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

$('.second').slick({
  centerMode: true,
  centerPadding: '20px',
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  dots: false,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 979,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 760,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        slidesToShow: 1,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        autoplay: false,
        slidesToShow: 1,
        // centerPadding: '30px'
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      }
    }
  ]
});

$('.forScreenShot').slick({
  centerMode: true,
  autoplay: true,
  centerPadding: '10px',
  slidesToShow: 3,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      }
    }
  ]
});